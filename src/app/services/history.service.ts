import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {
  constructor() { }

  setToLocalStorage(key: string, value: string){
    localStorage.setItem(key, value);
  }
  getLocalStorage(){
    return localStorage.getItem('currencyHistory');
  }
}
