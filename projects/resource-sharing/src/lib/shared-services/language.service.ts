import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class LanguageService {
  public static LANGUAGE_KEY = 'current-language';
  private languageSubject: BehaviorSubject<string> = new BehaviorSubject<string>(
    localStorage.getItem(LanguageService.LANGUAGE_KEY) || 'pt'
  );
  language$ = this.languageSubject.asObservable();

  setLanguage(language: string) {
    localStorage.setItem(LanguageService.LANGUAGE_KEY, language);
    this.languageSubject.next(language);
  }
}
