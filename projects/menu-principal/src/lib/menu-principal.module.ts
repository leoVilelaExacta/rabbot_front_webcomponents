
import { Injector, NgModule } from '@angular/core';
import { MenuComponent } from './menu/menu.component';
import { SvgImageComponent } from './svg-image/svg-image.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
// import { BrowserModule } from '@angular/platform-browser';
//import { runAt } from 'src/environments/develop';

let injector: Injector;

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

// const coreModules = [BrowserModule, CommonModule];
// const coreModules = [CommonModule];

@NgModule({
  declarations: [
    MenuComponent,
    SvgImageComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  exports: [
    MenuComponent
  ]
})
export class MenuPrincipalModule {
  constructor(private inj: Injector) {
    injector = this.inj;
  }
}
