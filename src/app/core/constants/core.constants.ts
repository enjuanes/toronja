export const PAGES = [
  {
    title: 'Color',
    description: 'Just pick a color',
    icon: 'palette',
    code: 'color',
    cardBackground: 'bg-purple-500/40',
  },
  {
    title: 'Chronometer',
    description: 'A simple chronometer',
    icon: 'timer',
    code: 'chronometer',
    cardBackground: 'bg-emerald-500/40',
  },
  {
    title: 'Countdown',
    description: 'A countdown to important moments',
    icon: 'event',
    code: 'countdown',
    cardBackground: 'bg-amber-500/40',
  },
  {
    title: 'Aemet',
    description: 'Get weather prediction from AEMET',
    icon: 'cloud',
    code: 'aemet',
    cardBackground: 'bg-rose-500/40',
  },
  {
    title: 'Radio',
    description: 'Configure your favorite radios stations',
    icon: 'radio',
    code: 'radio',
    cardBackground: 'bg-teal-500/40',
  },
  {
    title: 'Psicotécnico',
    description: 'Test de coordinación visomotora',
    icon: 'sports_score',
    code: 'psicotecnico',
    cardBackground: 'bg-yellow-500/40',
  },
] as const;

export const CHRONOMETER_START_KEY = 'CHRONOMETER_START';
export const CHRONOMETER_PAUSE_KEY = 'CHRONOMETER_PAUSE';

export const RADIO_VOLUME_KEY = 'RADIO_VOLUME';
