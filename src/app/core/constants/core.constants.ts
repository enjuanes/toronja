export const PAGES = [
  {
    title: 'Color',
    description: 'Just pick a color',
    icon: 'palette',
    code: 'color',
  },
  {
    title: 'Chronometer',
    description: 'A simple chronometer',
    icon: 'timer',
    code: 'chronometer',
  },
  {
    title: 'Countdown',
    description: 'A countdown to important moments',
    icon: 'event',
    code: 'countdown',
  },
  {
    title: 'Aemet',
    description: 'Get weather prediction from AEMET',
    icon: 'cloud',
    code: 'aemet',
  },
  {
    title: 'Radio',
    description: 'Configure your favorite radios stations',
    icon: 'radio',
    code: 'radio',
  },
  {
    title: 'Psicotécnico',
    description: 'Test de coordinación visomotora',
    icon: 'sports_score',
    code: 'psicotecnico',
  },
] as const;

export const CHRONOMETER_START_KEY = 'CHRONOMETER_START';
export const CHRONOMETER_PAUSE_KEY = 'CHRONOMETER_PAUSE';
