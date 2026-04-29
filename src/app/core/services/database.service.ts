import { Injectable } from '@angular/core';

const DB_NAME = 'toronja';
const DB_VERSION = 2;

@Injectable({ providedIn: 'root' })
export class DatabaseService {
  private dbPromise: Promise<IDBDatabase> | null = null;

  openDb(): Promise<IDBDatabase> {
    if (this.dbPromise) return this.dbPromise;

    this.dbPromise = new Promise((resolve, reject) => {
      const request = indexedDB.open(DB_NAME, DB_VERSION);

      request.onupgradeneeded = () => {
        const db = request.result;
        if (!db.objectStoreNames.contains('radios')) {
          db.createObjectStore('radios', { keyPath: 'id', autoIncrement: true });
        }
        if (!db.objectStoreNames.contains('notes')) {
          db.createObjectStore('notes', { keyPath: 'id', autoIncrement: true });
        }
      };

      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });

    return this.dbPromise;
  }
}
