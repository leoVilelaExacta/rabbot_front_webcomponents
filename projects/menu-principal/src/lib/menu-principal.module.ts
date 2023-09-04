import { NgModule } from '@angular/core';
import { MenuPrincipalComponent } from './menu-principal.component';
import { MenuComponent } from './menu/menu.component';



@NgModule({
  declarations: [
    MenuPrincipalComponent,
    MenuComponent
  ],
  imports: [
  ],
  exports: [
    MenuPrincipalComponent
  ]
})
export class MenuPrincipalModule { }
