import { EventEmitter } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService, ThemesService } from '@rabbot/resource-sharing';
import * as i0 from "@angular/core";
export declare class MenuComponent {
    private themesService;
    private translateService;
    private languageService;
    linkMenu: EventEmitter<any>;
    language: string;
    menuClosed: boolean;
    theme: string;
    constructor(themesService: ThemesService, translateService: TranslateService, languageService: LanguageService);
    page(link: string): void;
    toggleMenu(): void;
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MenuComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MenuComponent, "lib-menu", never, {}, { "linkMenu": "linkMenu"; }, never, never, false, never>;
}
