import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Sidebar } from '../../core/components/sidebar/sidebar';
import { signal } from '@angular/core';

@Component({
  selector: 'app-design-system',
  imports: [Sidebar],
  templateUrl: './design-system.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DesignSystem {
  protected sidebarOpen = signal(false);

  protected readonly toronjaShades = [
    { name: '50', hex: '#fff7ed', cls: 'bg-toronja-50' },
    { name: '100', hex: '#ffedd5', cls: 'bg-toronja-100' },
    { name: '200', hex: '#fdd6a9', cls: 'bg-toronja-200' },
    { name: '300', hex: '#fbb87a', cls: 'bg-toronja-300' },
    { name: '400', hex: '#f98e40', cls: 'bg-toronja-400' },
    { name: '500', hex: '#f76304', cls: 'bg-toronja-500' },
    { name: '600', hex: '#e04f03', cls: 'bg-toronja-600' },
    { name: '700', hex: '#b83a05', cls: 'bg-toronja-700' },
    { name: '800', hex: '#932f0a', cls: 'bg-toronja-800' },
    { name: '900', hex: '#79290e', cls: 'bg-toronja-900' },
    { name: '950', hex: '#421206', cls: 'bg-toronja-950' },
  ] as const;

  protected readonly grayShades = [
    { name: '50', cls: 'bg-gray-50' },
    { name: '100', cls: 'bg-gray-100' },
    { name: '200', cls: 'bg-gray-200' },
    { name: '300', cls: 'bg-gray-300' },
    { name: '400', cls: 'bg-gray-400' },
    { name: '500', cls: 'bg-gray-500' },
    { name: '600', cls: 'bg-gray-600' },
    { name: '700', cls: 'bg-gray-700' },
    { name: '800', cls: 'bg-gray-800' },
    { name: '900', cls: 'bg-gray-900' },
    { name: '950', cls: 'bg-gray-950' },
  ] as const;

  protected readonly icons = [
    'dashboard', 'palette', 'timer', 'event', 'cloud', 'radio',
    'settings', 'menu', 'close', 'search', 'add', 'delete',
    'edit', 'check', 'arrow_upward', 'arrow_downward', 'air',
    'water_drop', 'humidity_percentage', 'progress_activity',
    'vpn_key', 'cloud_off', 'wb_sunny', 'light_mode', 'dark_mode',
  ] as const;
}
