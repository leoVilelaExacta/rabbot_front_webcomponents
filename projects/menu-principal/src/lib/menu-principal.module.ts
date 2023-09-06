
import { ModuleWithProviders, NgModule } from '@angular/core';
import { MenuComponent } from './menu/menu.component';
import { SvgImageComponent } from './svg-image/svg-image.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
//import { runAt } from 'src/environments/develop';


// const coreModules = [BrowserModule, CommonModule];
const coreModules = [CommonModule];

@NgModule({
  declarations: [
    MenuComponent,
    SvgImageComponent
  ],
  imports: coreModules,
  exports: [
    MenuComponent
  ]
})
export class MenuPrincipalModule {
  /*static forRoot(): ModuleWithProviders<MenuPrincipalModule> {
    return {
      ngModule: MenuPrincipalModule,
      providers: []
    };
  }*/
}
