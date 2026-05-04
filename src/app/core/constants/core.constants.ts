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
    cardBackground: 'bg-rose-500/40',
  },
  {
    title: 'Radio',
    description: 'Configure your favorite radios stations',
    icon: 'radio',
    code: 'radio',
    cardBackground: 'bg-lime-500/40',
  },
  {
    title: 'Notepad',
    description: 'Write down your thoughts',
    icon: 'sticky_note_2',
    code: 'notepad',
    cardBackground: 'bg-yellow-500/40',
  },
  {
    title: 'Aemet',
    description: 'Get weather prediction from AEMET',
    icon: 'cloud',
    code: 'aemet',
    cardBackground: 'bg-sky-500/40',
  },
  {
    title: 'Countdown',
    description: 'A countdown to important moments',
    icon: 'event',
    code: 'countdown',
    cardBackground: 'bg-toronja-500/40',
  },
  {
    title: 'YT Focus',
    description: 'Watch a YouTube video distraction-free',
    icon: 'smart_display',
    code: 'yt-focus',
    cardBackground: 'bg-red-500/40',
  },
  {
    title: 'Psicotécnico',
    description: 'Test de coordinación visomotora',
    icon: 'sports_score',
    code: 'psicotecnico',
    cardBackground: 'bg-neutral-500/40',
  },
] as const;

export const CHRONOMETER_START_KEY = 'CHRONOMETER_START';
export const CHRONOMETER_PAUSE_KEY = 'CHRONOMETER_PAUSE';

export const RADIO_VOLUME_KEY = 'RADIO_VOLUME';

export const NOTEPAD_CONTENT_KEY = 'NOTEPAD_CONTENT';
export const NOTEPAD_DISABLE_WRAP_KEY = 'NOTEPAD_DISABLE_WRAP';
export const NOTEPAD_ACTIVE_TAB_KEY = 'NOTEPAD_ACTIVE_TAB';

export const YT_FOCUS_SHOW_CONTROLS_KEY = 'YT_FOCUS_SHOW_CONTROLS';
