import { DOCUMENT } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  DestroyRef,
  effect,
  ElementRef,
  inject,
  signal,
  viewChild,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { debounceTime, Subject } from 'rxjs';
import { Sidebar } from '../../core/components/sidebar/sidebar';
import { ColorService } from '../../core/services/color.service';

export const DEFAULT_COLOR = 'f76304';
export const FAVORITE_COLOR_KEY = 'FAVORITE_COLOR';

@Component({
  selector: 'app-color',
  imports: [Sidebar, ReactiveFormsModule],
  templateUrl: './color.html',
  styleUrl: './color.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Color {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly destroyRef = inject(DestroyRef);
  private readonly document = inject(DOCUMENT);
  private readonly fb = inject(FormBuilder);
  private readonly titleService = inject(Title);
  private readonly colorService = inject(ColorService);

  private readonly dialog = viewChild<ElementRef<HTMLDialogElement>>('colorDialog');
  private readonly hideSubject = new Subject<void>();

  protected readonly color = signal(DEFAULT_COLOR);
  protected readonly headerVisible = signal(false);
  protected sidebarOpen = signal(false);
  private readonly dialogOpen = signal(false);

  protected readonly pickerForm = this.fb.group({
    hex: [''],
    picker: [''],
  });

  protected readonly isFullscreen = signal(false);

  protected readonly isLight = computed(() => {
    const hex = this.color();
    if (hex.length !== 6) return false;
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    return (r + g + b) / 3 > 127.5;
  });

  constructor() {
    this.route.params.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((params) => {
      const paramColor = params['color'];
      if (paramColor && /^[0-9a-fA-F]{6}$/.test(paramColor)) {
        this.color.set(paramColor.toLowerCase());
        localStorage.setItem(FAVORITE_COLOR_KEY, paramColor.toLowerCase());
      } else {
        this.router.navigate(['/color', DEFAULT_COLOR]);
      }
    });

    effect(() => {
      if (!this.sidebarOpen()) {
        this.hideSubject.next();
      }
    });

    effect(() => {
      this.titleService.setTitle(this.colorService.getColorName(this.color()));
      const meta = this.document.querySelector('meta[name="theme-color"]');
      meta!.setAttribute('content', `#${this.color()}`);
    });

    this.hideSubject.pipe(debounceTime(3000), takeUntilDestroyed(this.destroyRef)).subscribe(() => {
      if (!this.dialogOpen() && !this.sidebarOpen()) {
        this.headerVisible.set(false);
      }
    });

    this.pickerForm.controls.picker.valueChanges
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((value) => {
        if (value) {
          const hex = value.replace('#', '');
          this.pickerForm.controls.hex.setValue(`#${hex}`, { emitEvent: false });
          this.navigateToColor(hex);
        }
      });

    this.pickerForm.controls.hex.valueChanges
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((value) => {
        const raw = value?.replace('#', '') ?? '';
        if (/^[0-9a-fA-F]{6}$/.test(raw)) {
          this.pickerForm.controls.picker.setValue(`#${raw}`, { emitEvent: false });
          this.navigateToColor(raw);
        }
      });
  }

  protected onMouseMove(): void {
    this.headerVisible.set(true);
    this.hideSubject.next();
  }

  protected randomColor(): void {
    const rndHex = () => {
      const hex = Math.round(Math.random() * 255).toString(16);
      return hex.length > 1 ? hex : `0${hex}`;
    };
    this.router.navigate(['/color', `${rndHex()}${rndHex()}${rndHex()}`]);
  }

  protected openPicker(): void {
    const hex = this.color();
    this.pickerForm.setValue({ hex: `#${hex}`, picker: `#${hex}` }, { emitEvent: false });
    this.dialogOpen.set(true);
    this.headerVisible.set(true);
    this.dialog()?.nativeElement.showModal();
  }

  protected closePicker(): void {
    this.dialogOpen.set(false);
    this.hideSubject.next();
    this.dialog()?.nativeElement.close();
  }

  protected onDialogClick(event: MouseEvent): void {
    if (event.target === this.dialog()?.nativeElement) {
      this.closePicker();
    }
  }

  protected toggleFullscreen(): void {
    if (!this.document.fullscreenElement) {
      this.document.documentElement.requestFullscreen();
      this.isFullscreen.set(true);
    } else {
      this.document.exitFullscreen();
      this.isFullscreen.set(false);
    }
  }

  private navigateToColor(hex: string): void {
    this.router.navigate(['/color', hex.toLowerCase()]);
  }
}
