import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  ElementRef,
  inject,
  OnInit,
  signal,
  untracked,
  viewChild,
} from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { defaultKeymap, history, historyKeymap, indentWithTab } from '@codemirror/commands';
import { defaultHighlightStyle, syntaxHighlighting } from '@codemirror/language';
import { lintKeymap } from '@codemirror/lint';
import {
  findNext,
  findPrevious,
  search,
  SearchQuery,
  selectNextOccurrence,
  setSearchQuery,
} from '@codemirror/search';
import { Compartment, EditorState } from '@codemirror/state';
import { drawSelection, EditorView, keymap } from '@codemirror/view';
import { Sidebar } from '../../core/components/sidebar/sidebar';
import {
  NOTEPAD_ACTIVE_TAB_KEY,
  NOTEPAD_DISABLE_WRAP_KEY,
} from '../../core/constants/core.constants';
import { HorizontalWheelScrollDirective } from '../../core/directives/horizontal-wheel-scroll';
import { ConfirmDialogService } from '../../core/services/confirm-dialog.service';
import { NotepadService, NotepadTab } from '../../core/services/notepad.service';

@Component({
  selector: 'app-notepad',
  imports: [Sidebar, ReactiveFormsModule, HorizontalWheelScrollDirective],
  templateUrl: './notepad.html',
  styleUrl: './notepad.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Notepad implements OnInit {
  private readonly notepadService = inject(NotepadService);
  private readonly confirmDialogService = inject(ConfirmDialogService);
  private readonly fb = inject(FormBuilder);
  private readonly codeMirrorWrapper = viewChild<ElementRef<HTMLDivElement>>('codeMirrorWrapper');
  private readonly editDialog = viewChild<ElementRef<HTMLDialogElement>>('editDialog');
  private readonly searchInputRef = viewChild<ElementRef<HTMLInputElement>>('searchInputRef');

  protected editorView?: EditorView;
  private readonly wrapCompartment = new Compartment();
  private isSwitchingTab = false;

  protected readonly wrapDisabled = signal(
    localStorage.getItem(NOTEPAD_DISABLE_WRAP_KEY) === 'true'
  );
  protected readonly sidebarOpen = signal(false);
  protected readonly tabs = signal<NotepadTab[]>([]);
  protected readonly activeTabId = signal<number | null>(null);
  protected readonly activeTab = computed(
    () => this.tabs().find((t) => t.id === this.activeTabId()) ?? null
  );
  protected readonly areMultipleTabs = computed(() => this.tabs().length > 1);

  protected readonly searchOpen = signal(false);
  protected readonly searchQuery = signal('');
  protected readonly searchTotalMatches = signal(0);
  protected readonly searchCurrentIndex = signal(0);

  protected readonly editForm = this.fb.group({
    name: ['', Validators.required],
  });

  constructor() {
    effect(() => {
      const wrapper = this.codeMirrorWrapper();
      if (wrapper) {
        this.editorView = new EditorView({
          state: untracked(() =>
            EditorState.create({
              doc: this.activeTab()?.content ?? '',
              extensions: this.buildExtensions(),
            })
          ),
          parent: wrapper.nativeElement,
        });
      }
    });

    effect(() => {
      localStorage.setItem(NOTEPAD_DISABLE_WRAP_KEY, String(this.wrapDisabled()));
      if (this.editorView) {
        this.editorView.dispatch({
          effects: this.wrapCompartment.reconfigure(
            this.wrapDisabled() ? [] : EditorView.lineWrapping
          ),
        });
      }
    });
  }

  private buildExtensions() {
    return [
      history(),
      drawSelection(),
      EditorState.allowMultipleSelections.of(true),
      syntaxHighlighting(defaultHighlightStyle, { fallback: true }),
      search(),
      keymap.of([
        {
          key: 'Mod-f',
          run: () => {
            this.openSearch();
            return true;
          },
          preventDefault: true,
        },
        { key: 'Mod-d', run: selectNextOccurrence, preventDefault: true },
        ...defaultKeymap,
        ...historyKeymap,
        indentWithTab,
        ...lintKeymap,
      ]),
      this.wrapCompartment.of(this.wrapDisabled() ? [] : EditorView.lineWrapping),
      EditorView.updateListener.of((update) => {
        if (update.docChanged && !this.isSwitchingTab) {
          this.saveActiveTabContent(update.state.doc.toString());
        }
      }),
    ];
  }

  async ngOnInit(): Promise<void> {
    await this.notepadService.seedDefaultIfEmpty();
    await this.loadTabs();
    const saved = Number(localStorage.getItem(NOTEPAD_ACTIVE_TAB_KEY));
    const target = this.tabs().find((t) => t.id === saved) ?? this.tabs()[0];
    if (target?.id !== undefined) {
      this.switchTab(target.id);
    }
  }

  private async loadTabs(): Promise<void> {
    const all = await this.notepadService.getAll();
    all.sort((a, b) => a.order - b.order);
    this.tabs.set(all);
  }

  protected switchTab(id: number): void {
    this.activeTabId.set(id);
    localStorage.setItem(NOTEPAD_ACTIVE_TAB_KEY, String(id));
    const tab = this.tabs().find((t) => t.id === id);
    if (tab && this.editorView) {
      this.isSwitchingTab = true;
      this.editorView.setState(
        EditorState.create({ doc: tab.content, extensions: this.buildExtensions() })
      );
      this.isSwitchingTab = false;
      if (this.searchOpen() && this.searchQuery()) {
        this.applySearch(this.searchQuery());
      } else {
        this.searchTotalMatches.set(0);
        this.searchCurrentIndex.set(0);
      }
    }
  }

  protected openSearch(): void {
    this.searchOpen.set(true);
    setTimeout(() => this.searchInputRef()?.nativeElement.focus(), 0);
    if (this.searchQuery()) this.applySearch(this.searchQuery());
  }

  protected closeSearch(): void {
    this.searchOpen.set(false);
    this.searchQuery.set('');
    this.searchTotalMatches.set(0);
    this.searchCurrentIndex.set(0);
    if (this.editorView) {
      this.editorView.dispatch({ effects: setSearchQuery.of(new SearchQuery({ search: '' })) });
      this.editorView.focus();
    }
  }

  protected onSearchInput(event: Event): void {
    const query = (event.target as HTMLInputElement).value;
    this.searchQuery.set(query);
    this.applySearch(query);
  }

  protected searchFindNext(): void {
    if (!this.editorView || !this.searchQuery()) return;
    findNext(this.editorView);
    const { current, total } = this.getMatchInfo();
    this.searchTotalMatches.set(total);
    this.searchCurrentIndex.set(current);
  }

  protected searchFindPrev(): void {
    if (!this.editorView || !this.searchQuery()) return;
    findPrevious(this.editorView);
    const { current, total } = this.getMatchInfo();
    this.searchTotalMatches.set(total);
    this.searchCurrentIndex.set(current);
  }

  private applySearch(query: string): void {
    if (!this.editorView) return;
    const q = new SearchQuery({ search: query, caseSensitive: false });
    this.editorView.dispatch({ effects: setSearchQuery.of(q) });
    if (query && q.valid) {
      const cursor = q.getCursor(this.editorView.state.doc);
      const first = cursor.next();
      if (!first.done) {
        this.editorView.dispatch({
          selection: { anchor: first.value.from, head: first.value.to },
          scrollIntoView: true,
        });
        let total = 1;
        while (!cursor.next().done) total++;
        this.searchTotalMatches.set(total);
        this.searchCurrentIndex.set(1);
      } else {
        this.searchTotalMatches.set(0);
        this.searchCurrentIndex.set(0);
      }
    } else {
      this.searchTotalMatches.set(0);
      this.searchCurrentIndex.set(0);
    }
  }

  private getMatchInfo(): { current: number; total: number } {
    if (!this.editorView || !this.searchQuery()) return { current: 0, total: 0 };
    const q = new SearchQuery({ search: this.searchQuery(), caseSensitive: false });
    if (!q.valid) return { current: 0, total: 0 };
    const state = this.editorView.state;
    const sel = state.selection.main;
    const cursor = q.getCursor(state.doc);
    let total = 0,
      current = 0,
      result;
    while (!(result = cursor.next()).done) {
      total++;
      if (result.value.from === sel.from && result.value.to === sel.to) current = total;
    }
    return { current, total };
  }

  private saveActiveTabContent(content: string): void {
    const tab = this.activeTab();
    if (!tab?.id) return;
    const updated = { ...tab, content };
    this.tabs.update((tabs) => tabs.map((t) => (t.id === tab.id ? updated : t)));
    this.notepadService.update(updated);
  }

  protected async addTab(): Promise<void> {
    const order = this.tabs().length;
    const created = await this.notepadService.add({
      order,
      name: `Tab ${order + 1}`,
      content: '',
    });
    this.tabs.update((tabs) => [...tabs, created]);
    this.switchTab(created.id!);
  }

  protected async closeTab(id: number, event: MouseEvent): Promise<void> {
    event.stopPropagation();
    const tab = this.tabs().find((t) => t.id === id);
    const hasContent = !!tab?.content.trim();
    if (hasContent && !await this.confirmDialogService.confirm('Are you sure you want to delete this tab?')) return;

    await this.notepadService.delete(id);
    const remaining = this.tabs().filter((t) => t.id !== id);
    this.tabs.set(remaining);

    if (this.activeTabId() === id) {
      const next = remaining[0];
      if (next?.id !== undefined) {
        this.switchTab(next.id);
      } else {
        this.activeTabId.set(null);
      }
    }
  }

  protected openEditDialog(): void {
    const tab = this.activeTab();
    if (!tab) return;
    this.editForm.setValue({ name: tab.name });
    this.editDialog()?.nativeElement.showModal();
  }

  protected closeEditDialog(): void {
    this.editDialog()?.nativeElement.close();
  }

  protected async onEditSubmit(): Promise<void> {
    if (this.editForm.invalid) return;
    const tab = this.activeTab();
    if (!tab?.id) return;
    const { name } = this.editForm.getRawValue();
    const updated = { ...tab, name: name! };
    await this.notepadService.update(updated);
    this.tabs.update((tabs) => tabs.map((t) => (t.id === tab.id ? updated : t)));
    this.closeEditDialog();
  }
}
