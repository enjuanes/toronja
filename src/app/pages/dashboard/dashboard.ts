import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PAGES } from '../../core/constants';
import { ThemeService } from '../../core/services/theme.service';

@Component({
  selector: 'app-dashboard',
  imports: [RouterLink],
  templateUrl: './dashboard.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Dashboard {
  protected readonly pages = PAGES;
  protected readonly themeService = inject(ThemeService);
}
