import { Component, EventEmitter, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService, ThemesService } from '@rabbot/resource-sharing';

@Component({
  selector: 'lib-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  @Output('linkMenu')
  linkMenu: EventEmitter<any> = new EventEmitter<any>();
  language: string = localStorage.getItem(LanguageService.LANGUAGE_KEY) ?? 'pt';
  menuClosed = false;
  theme: string = localStorage.getItem(ThemesService.THEME_KEY) === 'light' ? 'dark' : 'light';

  constructor(private themesService: ThemesService, private translateService: TranslateService, private languageService: LanguageService) {
    this.translateService.setDefaultLang(this.language);
    this.languageService.setLanguage(this.language);

    window.addEventListener('message', (event) => {
      if (event.data.type === 'LANGUAGE_CHANGE') {
        this.translateService.setDefaultLang(event.data.language);
        this.languageService.setLanguage(event.data.language);
      }
    });
  }


  page(link: string){
    this.linkMenu.emit(link);
  }

  toggleMenu() {
    this.menuClosed = !this.menuClosed;
  }

  ngOnInit() {
    this.themesService.theme$.subscribe(theme => {
      this.theme = theme;
      document.body.className = theme; 
    });
  }
}
