import { EventEmitter } from '@angular/core';
import { ThemesService } from '@rabbot/resource-sharing';
import * as i0 from "@angular/core";
export declare class MenuComponent {
    private themesService;
    linkMenu: EventEmitter<any>;
    menuClosed: boolean;
    theme: string;
    constructor(themesService: ThemesService);
    page(link: string): void;
    toggleMenu(): void;
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MenuComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MenuComponent, "lib-menu", never, {}, { "linkMenu": "linkMenu"; }, never, never, false, never>;
}
