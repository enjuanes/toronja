import { ApplicationRef, createComponent, EnvironmentInjector, inject, Injectable } from '@angular/core';
import { ConfirmDialog } from '../components/confirm-dialog/confirm-dialog';

@Injectable({ providedIn: 'root' })
export class ConfirmDialogService {
  private readonly appRef = inject(ApplicationRef);
  private readonly injector = inject(EnvironmentInjector);

  confirm(message: string): Promise<boolean> {
    const ref = createComponent(ConfirmDialog, { environmentInjector: this.injector });
    this.appRef.attachView(ref.hostView);
    document.body.appendChild(ref.location.nativeElement);

    const result = ref.instance.open(message);
    result.finally(() => {
      this.appRef.detachView(ref.hostView);
      ref.destroy();
    });

    return result;
  }
}
