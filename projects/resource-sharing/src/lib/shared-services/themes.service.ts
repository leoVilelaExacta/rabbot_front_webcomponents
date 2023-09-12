import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemesService {
  public static THEME_KEY = 'current-theme';
  private themeSubject: BehaviorSubject<string> = new BehaviorSubject<string>(
    localStorage.getItem(ThemesService.THEME_KEY) || 'light'
  );
  theme$ = this.themeSubject.asObservable();

  setTheme(theme: string) {
    localStorage.setItem(ThemesService.THEME_KEY, theme);
    this.themeSubject.next(theme);
  }
}
