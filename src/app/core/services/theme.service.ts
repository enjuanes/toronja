import { computed, Injectable, signal } from '@angular/core';

export type Theme = 'light' | 'dark' | 'system';

const THEME_KEY = 'theme';

const defaultTheme: Theme = 'light';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

  private readonly theme = signal<Theme>(this.getStoredTheme());

  readonly current = this.theme.asReadonly();

  readonly icon = computed(() => {
    const icons: Record<Theme, string> = {
      light: 'light_mode',
      dark: 'dark_mode',
      system: 'routine',
    };
    return icons[this.theme()];
  });

  readonly title = computed(() => {
    const titles: Record<Theme, string> = {
      light: 'Light',
      dark: 'Dark',
      system: 'System',
    };
    return titles[this.theme()];
  });

  constructor() {
    this.applyTheme(this.theme());

    this.mediaQuery.addEventListener('change', () => {
      if (this.theme() === 'system') {
        this.applyTheme('system');
      }
    });
  }

  cycle(): void {
    const order: Theme[] = ['system', 'light', 'dark'];
    const next = order[(order.indexOf(this.theme()) + 1) % order.length];
    this.theme.set(next);
    this.applyTheme(next);
  }

  private getStoredTheme(): Theme {
    const stored = localStorage.getItem(THEME_KEY);
    if (stored === 'light' || stored === 'dark' || stored === 'system') {
      return stored;
    }
    return defaultTheme;
  }

  private applyTheme(theme: Theme): void {
    const root = document.documentElement;

    if (theme === defaultTheme) {
      localStorage.removeItem(THEME_KEY);
    } else {
      localStorage.setItem(THEME_KEY, theme);
    }

    if (theme === 'system') {
      const prefersDark = this.mediaQuery.matches;
      root.classList.toggle('dark', prefersDark);

      root.style.colorScheme = prefersDark ? 'dark' : 'light';
    } else {
      root.classList.toggle('dark', theme === 'dark');
      root.style.colorScheme = theme;
    }
  }
}
