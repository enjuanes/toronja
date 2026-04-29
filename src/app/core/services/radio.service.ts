import { inject, Injectable } from '@angular/core';
import { DatabaseService } from './database.service';

export interface RadioStation {
  id?: number;
  emoji: string;
  name: string;
  url: string;
}

const STORE_NAME = 'radios';

// Radios obtained from https://github.com/LaQuay/TDTChannels/blob/master/RADIO.md and https://fallout.fm/, thank you!

const DEFAULT_RADIOS: RadioStation[] = [
  {
    emoji: '⭐',
    name: 'MegaStar',
    url: 'https://megastar-cope.flumotion.com/playlist.m3u8',
  },
  {
    emoji: '🍑',
    name: 'Motiva FM',
    url: 'https://stream.motivafm.com/listen/motiva/motiva.mp3',
  },
  {
    emoji: '⚡',
    name: 'Flaix FM',
    url: 'https://stream.flaixfm.cat/icecast',
  },
  {
    emoji: '🌊',
    name: 'Europa FM',
    url: 'https://radio-atres-live.ondacero.es/api/livestream-redirect/EFMAAC.aac',
  },
  {
    emoji: '🐄',
    name: 'LOS40',
    url: 'https://playerservices.streamtheworld.com/api/livestream-redirect/LOS40AAC.aac',
  },
  {
    emoji: '🏙️',
    name: 'LOS40 Urban',
    url: 'https://playerservices.streamtheworld.com/api/livestream-redirect/LOS40_URBANAAC.aac',
  },
  {
    emoji: '💃',
    name: 'LOS40 Dance',
    url: 'https://playerservices.streamtheworld.com/api/livestream-redirect/LOS40_DANCEAAC.aac',
  },
  {
    emoji: '💿',
    name: 'LOS40 Clasic',
    url: 'https://playerservices.streamtheworld.com/api/livestream-redirect/LOS40_CLASSICAAC.aac',
  },
  {
    emoji: '💋',
    name: 'Kiss FM',
    url: 'https://kissfm.kissfmradio.cires21.com/kissfm.mp3',
  },
  {
    emoji: '🎸',
    name: 'Rock FM',
    url: 'https://rockfm-cope.flumotion.com/playlist.m3u8',
  },
  {
    emoji: '⛓️',
    name: 'Cadena 100',
    url: 'https://cadena100-cope.flumotion.com/chunks.m3u8',
  },
  {
    emoji: '☎️',
    name: 'Cadena Dial',
    url: 'https://25453.live.streamtheworld.com/CADENADIALAAC_SC',
  },
  {
    emoji: '☢️',
    name: 'Fallout',
    url: 'https://fallout.fm:8444/falloutfm1.ogg',
  },
  {
    emoji: '💎',
    name: 'Diamon City Radio',
    url: 'https://fallout.fm:8444/falloutfm6.ogg',
  },
  {
    emoji: '🎰',
    name: 'Radio New Vegas',
    url: 'https://fallout.fm:8444/falloutfm3.ogg',
  },
  {
    emoji: '✨',
    name: 'Galaxy News Radio',
    url: 'https://fallout.fm:8444/falloutfm2.ogg',
  },
];

@Injectable({ providedIn: 'root' })
export class RadioService {
  private readonly db = inject(DatabaseService);

  async getAll(): Promise<RadioStation[]> {
    const db = await this.db.openDb();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readonly');
      const store = tx.objectStore(STORE_NAME);
      const request = store.getAll();
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
  }

  async add(station: RadioStation): Promise<RadioStation> {
    const db = await this.db.openDb();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readwrite');
      const store = tx.objectStore(STORE_NAME);
      const request = store.add(station);
      request.onsuccess = () => resolve({ ...station, id: request.result as number });
      request.onerror = () => reject(request.error);
    });
  }

  async delete(id: number): Promise<void> {
    const db = await this.db.openDb();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readwrite');
      const store = tx.objectStore(STORE_NAME);
      const request = store.delete(id);
      request.onsuccess = () => resolve();
      request.onerror = () => reject(request.error);
    });
  }

  async seedDefaultIfEmpty(): Promise<void> {
    const all = await this.getAll();
    if (all.length === 0) {
      await this.addDefaultRadios();
    }
  }

  async addDefaultRadios(): Promise<void> {
    for (const radio of DEFAULT_RADIOS) {
      await this.add(radio);
    }
  }

  async resetRadios(): Promise<void> {
    const db = await this.db.openDb();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readwrite');
      const store = tx.objectStore(STORE_NAME);
      const clearRequest = store.clear();

      clearRequest.onsuccess = async () => {
        try {
          await this.addDefaultRadios();
          resolve();
        } catch (error) {
          reject(error);
        }
      };

      clearRequest.onerror = () => reject(clearRequest.error);
    });
  }
}
