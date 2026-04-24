import {
  ChangeDetectionStrategy,
  Component,
  effect,
  ElementRef,
  signal,
  viewChild,
} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Compartment } from '@codemirror/state';
import { EditorView, minimalSetup } from 'codemirror';
import { Sidebar } from '../../core/components/sidebar/sidebar';
import { NOTEPAD_CONTENT_KEY, NOTEPAD_ENABLE_WRAP_KEY } from '../../core/constants/core.constants';

@Component({
  selector: 'app-notepad',
  imports: [Sidebar, ReactiveFormsModule],
  templateUrl: './notepad.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Notepad {
  private readonly codeMirrorWrapper = viewChild<ElementRef<HTMLDivElement>>('codeMirrorWrapper');

  protected editorView?: EditorView;
  private wrapCompartment = new Compartment();
  protected wrapEnabled = signal(localStorage.getItem(NOTEPAD_ENABLE_WRAP_KEY) === 'true');

  protected sidebarOpen = signal(false);

  constructor() {
    effect(() => {
      const codeMirrorWrapper = this.codeMirrorWrapper();
      if (codeMirrorWrapper) {
        this.editorView = new EditorView({
          doc: localStorage.getItem(NOTEPAD_CONTENT_KEY) ?? '',
          extensions: [
            // basicSetup,
            minimalSetup,
            this.wrapCompartment.of(EditorView.lineWrapping),
            EditorView.updateListener.of((update) => {
              if (update.docChanged) {
                localStorage.setItem(NOTEPAD_CONTENT_KEY, update.state.doc.toString());
              }
            }),
          ],
          parent: codeMirrorWrapper.nativeElement,
        });
      }
    });

    effect(() => {
      localStorage.setItem(NOTEPAD_ENABLE_WRAP_KEY, String(this.wrapEnabled()));
      if (this.editorView) {
        this.editorView.dispatch({
          effects: this.wrapCompartment.reconfigure(
            this.wrapEnabled() ? EditorView.lineWrapping : []
          ),
        });
      }
    });
  }
}
