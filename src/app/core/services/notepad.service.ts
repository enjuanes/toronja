import { inject, Injectable } from '@angular/core';
import { DatabaseService } from './database.service';

export interface NotepadTab {
  id?: number;
  order: number;
  name: string;
  content: string;
}

const STORE_NAME = 'notes';

@Injectable({ providedIn: 'root' })
export class NotepadService {
  private readonly db = inject(DatabaseService);

  async getAll(): Promise<NotepadTab[]> {
    const db = await this.db.openDb();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readonly');
      const store = tx.objectStore(STORE_NAME);
      const request = store.getAll();
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
  }

  async add(tab: Omit<NotepadTab, 'id'>): Promise<NotepadTab> {
    const db = await this.db.openDb();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readwrite');
      const store = tx.objectStore(STORE_NAME);
      const request = store.add(tab);
      request.onsuccess = () => resolve({ ...tab, id: request.result as number });
      request.onerror = () => reject(request.error);
    });
  }

  async update(tab: NotepadTab): Promise<void> {
    const db = await this.db.openDb();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readwrite');
      const store = tx.objectStore(STORE_NAME);
      const request = store.put(tab);
      request.onsuccess = () => resolve();
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
      await this.add({
        order: 0,
        name: 'Tab 1',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      });
    }
  }
}

