import { Component, EventEmitter, Output } from '@angular/core';
import { ThemesService } from '@rabbot/resource-sharing';

@Component({
  selector: 'lib-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  @Output('linkMenu')
  linkMenu: EventEmitter<any> = new EventEmitter<any>();
  menuClosed = false;
  theme: string = localStorage.getItem(ThemesService.THEME_KEY) === 'light' ? 'dark' : 'light';

  constructor(private themesService: ThemesService) { }


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
