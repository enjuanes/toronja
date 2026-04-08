import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Sidebar } from '../../core/sidebar/sidebar';

@Component({
  selector: 'app-countdown-create',
  imports: [ReactiveFormsModule, Sidebar],
  templateUrl: './countdown-create.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountdownCreate {
  private readonly router = inject(Router);
  private readonly formBuilder = inject(FormBuilder);

  protected sidebarOpen = signal(false);

  protected readonly form = this.formBuilder.group({
    name: [''],
    time: [this.defaultDateTime(), Validators.required],
  });

  private defaultDateTime(): string {
    const now = new Date();
    now.setHours(now.getHours() + 1);
    now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
    return now.toISOString().slice(0, 16);
  }

  protected onSubmit(): void {
    if (this.form.invalid) return;

    const { name, time } = this.form.getRawValue();
    const epoch = Math.floor(new Date(time!).getTime() / 1000);

    if (name) {
      this.router.navigate(['/countdown', epoch, name]);
    } else {
      this.router.navigate(['/countdown', epoch]);
    }
  }
}
