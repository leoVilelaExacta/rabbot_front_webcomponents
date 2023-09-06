import { EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare class MenuComponent {
    linkMenu: EventEmitter<any>;
    menuClosed: boolean;
    page(link: string): void;
    toggleMenu(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MenuComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MenuComponent, "lib-menu", never, {}, { "linkMenu": "linkMenu"; }, never, never, false, never>;
}
