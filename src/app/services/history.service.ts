import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {
  constructor() {}

  setToLocalStorage(value: string){
    localStorage.setItem('currencyHistory', value);
  }

  getLocalStorage(){
    return localStorage.getItem('currencyHistory');
  }
}
