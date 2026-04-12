import { ChangeDetectionStrategy, Component, inject, model } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { PAGES } from '../../../core/constants';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './sidebar.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Sidebar {
  open = model(false);
  protected readonly pages = PAGES;
  protected readonly themeService = inject(ThemeService);

  close(): void {
    this.open.set(false);
  }
}
