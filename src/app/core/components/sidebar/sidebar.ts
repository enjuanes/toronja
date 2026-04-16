import { ChangeDetectionStrategy, Component, inject, isDevMode, model } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { PAGES } from '../../constants/core.constants';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './sidebar.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Sidebar {
  open = model(false);
  protected readonly pages = PAGES.filter((page) => !('devOnly' in page && page.devOnly) || isDevMode());
  protected readonly themeService = inject(ThemeService);

  close(): void {
    this.open.set(false);
  }
}
