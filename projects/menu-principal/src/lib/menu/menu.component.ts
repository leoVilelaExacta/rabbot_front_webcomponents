import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'lib-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  @Output('linkMenu')
  linkMenu: EventEmitter<any> = new EventEmitter<any>();
  menuClosed = false;

  page(link: string){
    this.linkMenu.emit(link);
  }

  toggleMenu() {
    this.menuClosed = !this.menuClosed;
  }
}
