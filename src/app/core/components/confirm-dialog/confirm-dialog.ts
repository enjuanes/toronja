import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, inject, signal, viewChild } from '@angular/core';

@Component({
  selector: 'app-confirm-dialog',
  imports: [],
  templateUrl: './confirm-dialog.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfirmDialog {
  private readonly dialogRef = viewChild<ElementRef<HTMLDialogElement>>('confirmationDialog');
  private readonly cdr = inject(ChangeDetectorRef);

  protected readonly message = signal('');
  private resolve?: (value: boolean) => void;

  open(message: string): Promise<boolean> {
    this.message.set(message);
    this.cdr.detectChanges();
    return new Promise<boolean>((res) => {
      this.resolve = res;
      this.dialogRef()?.nativeElement.showModal();
    });
  }

  protected confirm(): void {
    this.close(true);
  }

  protected cancel(): void {
    this.close(false);
  }

  private close(result: boolean): void {
    if (!this.resolve) return;
    const res = this.resolve;
    this.resolve = undefined;
    this.dialogRef()?.nativeElement.close();
    res(result);
  }
}
