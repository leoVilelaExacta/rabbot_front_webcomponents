import { Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import * as i0 from "@angular/core";
import * as i1 from "./menu/menu.component";
import * as i2 from "./svg-image/svg-image.component";
import * as i3 from "@angular/common";
import * as i4 from "@angular/common/http";
import * as i5 from "@ngx-translate/core";
export declare function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader;
export declare class MenuPrincipalModule {
    private inj;
    constructor(inj: Injector);
    static ɵfac: i0.ɵɵFactoryDeclaration<MenuPrincipalModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<MenuPrincipalModule, [typeof i1.MenuComponent, typeof i2.SvgImageComponent], [typeof i3.CommonModule, typeof i4.HttpClientModule, typeof i5.TranslateModule], [typeof i1.MenuComponent]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<MenuPrincipalModule>;
}
