import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  setItem(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  getItem(key: any): any {
    console.log(key);
    var item = localStorage.getItem(key);
    return item != null ?JSON.parse(item):"";
  }

  deleteItem(key: string) {
    localStorage.removeItem(key);
  }

  deleteAll() {
    localStorage.clear();
  }

  isEmpty() {
    return localStorage.length === 0;
  }
}
