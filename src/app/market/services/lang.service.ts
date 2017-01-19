import { Injectable } from '@angular/core';

@Injectable()
export class LangService {
  private _currentLang: string;

    constructor() { }

    get currentLang(): string {
      return this._currentLang;
    }

    set currentLang(lang: string) {
      this._currentLang = lang;
    }
}
