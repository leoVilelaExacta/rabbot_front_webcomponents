import { ChangeDetectionStrategy, Component, HostBinding, Input, ViewEncapsulation } from '@angular/core';
import { map } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/platform-browser";
import * as i2 from "./svg-image.service";
import * as i3 from "@angular/common";
export class SvgImageComponent {
    constructor(sanitizer, svgImageService) {
        this.sanitizer = sanitizer;
        this.svgImageService = svgImageService;
        this.size = 'default';
    }
    set src(value) {
        // Pegamos o caminho do SVG e invocamos o
        // nosso service que vai baixá-lo.
        this.setSvgContent(value);
    }
    setSvgContent(src) {
        // Baixamos o SVG do service e atribuímos
        // à nossa variável que é renderizada no template
        this.svgContent = this.svgImageService
            .getSvgContent(src)
            .pipe(map(content => this.sanitizer.bypassSecurityTrustHtml(content)));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.3", ngImport: i0, type: SvgImageComponent, deps: [{ token: i1.DomSanitizer }, { token: i2.SvgImageService }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.3", type: SvgImageComponent, selector: "svg-image", inputs: { size: "size", src: "src" }, host: { properties: { "class": "this.size" } }, ngImport: i0, template: "<div class=\"icon-inner\" [innerHTML]=\"svgContent | async\"></div>", styles: [":host{--icon-font-size: 1em;display:inline-block;width:1em;height:1em;text-align:center;font-size:var(--icon-font-size);contain:strict;fill:currentColor;box-sizing:content-box!important}.icon-inner{display:block;width:100%;height:100%}svg{width:100%;height:100%;max-width:100%;max-height:100%}:host(.small){font-size:18px}:host(.large){font-size:44px}\n"], dependencies: [{ kind: "pipe", type: i3.AsyncPipe, name: "async" }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.ShadowDom }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.3", ngImport: i0, type: SvgImageComponent, decorators: [{
            type: Component,
            args: [{ selector: 'svg-image', changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.ShadowDom, template: "<div class=\"icon-inner\" [innerHTML]=\"svgContent | async\"></div>", styles: [":host{--icon-font-size: 1em;display:inline-block;width:1em;height:1em;text-align:center;font-size:var(--icon-font-size);contain:strict;fill:currentColor;box-sizing:content-box!important}.icon-inner{display:block;width:100%;height:100%}svg{width:100%;height:100%;max-width:100%;max-height:100%}:host(.small){font-size:18px}:host(.large){font-size:44px}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.DomSanitizer }, { type: i2.SvgImageService }]; }, propDecorators: { 
        // Classes com tamanhos predefinidos
        size: [{
                type: Input
            }, {
                type: HostBinding,
                args: ['class']
            }], src: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3ZnLWltYWdlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21lbnUtcHJpbmNpcGFsL3NyYy9saWIvc3ZnLWltYWdlL3N2Zy1pbWFnZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tZW51LXByaW5jaXBhbC9zcmMvbGliL3N2Zy1pbWFnZS9zdmctaW1hZ2UuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTFHLE9BQU8sRUFBYyxHQUFHLEVBQUUsTUFBTSxNQUFNLENBQUM7Ozs7O0FBVXZDLE1BQU0sT0FBTyxpQkFBaUI7SUFTNUIsWUFDVSxTQUF1QixFQUN2QixlQUFnQztRQURoQyxjQUFTLEdBQVQsU0FBUyxDQUFjO1FBQ3ZCLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQVAxQyxTQUFJLEdBQWtDLFNBQVMsQ0FBQztJQVE3QyxDQUFDO0lBRUosSUFDSSxHQUFHLENBQUMsS0FBYTtRQUNuQix5Q0FBeUM7UUFDekMsa0NBQWtDO1FBQ2xDLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVPLGFBQWEsQ0FBQyxHQUFXO1FBQy9CLHlDQUF5QztRQUN6QyxpREFBaUQ7UUFDakQsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsZUFBZTthQUNuQyxhQUFhLENBQUMsR0FBRyxDQUFDO2FBQ2xCLElBQUksQ0FBQyxHQUFHLENBQ1AsT0FBTyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLHVCQUF1QixDQUFDLE9BQU8sQ0FBQyxDQUMzRCxDQUFDLENBQUM7SUFDUCxDQUFDOzhHQTdCVSxpQkFBaUI7a0dBQWpCLGlCQUFpQix1SUNaOUIscUVBQStEOzsyRkRZbEQsaUJBQWlCO2tCQVA3QixTQUFTOytCQUNFLFdBQVcsbUJBR0osdUJBQXVCLENBQUMsTUFBTSxpQkFDaEMsaUJBQWlCLENBQUMsU0FBUzs7UUFLeEMsb0NBQW9DO1FBQ3RDLElBQUk7c0JBSEgsS0FBSzs7c0JBQ0wsV0FBVzt1QkFBQyxPQUFPO2dCQWFoQixHQUFHO3NCQUROLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBIb3N0QmluZGluZywgSW5wdXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTYWZlSHRtbCwgRG9tU2FuaXRpemVyIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBtYXAgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFN2Z0ltYWdlU2VydmljZSB9IGZyb20gJy4vc3ZnLWltYWdlLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzdmctaW1hZ2UnLFxuICB0ZW1wbGF0ZVVybDogJy4vc3ZnLWltYWdlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc3ZnLWltYWdlLmNvbXBvbmVudC5zY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5TaGFkb3dEb21cbn0pXG5leHBvcnQgY2xhc3MgU3ZnSW1hZ2VDb21wb25lbnQge1xuICBASW5wdXQoKVxuICBASG9zdEJpbmRpbmcoJ2NsYXNzJylcbiAgICAvLyBDbGFzc2VzIGNvbSB0YW1hbmhvcyBwcmVkZWZpbmlkb3NcbiAgc2l6ZTogJ3NtYWxsJyB8ICdsYXJnZScgfCAnZGVmYXVsdCcgPSAnZGVmYXVsdCc7XG5cbiAgLy8gVmFyacOhdmVsIGNvbSBhIHJlcXVpc2nDp8OjbyBkbyBTVkcgcXVlIHZhaSBzZXIgcmVuZGVyaXphZG9cbiAgcHVibGljIHN2Z0NvbnRlbnQ6IE9ic2VydmFibGU8U2FmZUh0bWw+IHwgdW5kZWZpbmVkO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgc2FuaXRpemVyOiBEb21TYW5pdGl6ZXIsXG4gICAgcHJpdmF0ZSBzdmdJbWFnZVNlcnZpY2U6IFN2Z0ltYWdlU2VydmljZVxuICApIHt9XG5cbiAgQElucHV0KClcbiAgc2V0IHNyYyh2YWx1ZTogc3RyaW5nKSB7XG4gICAgLy8gUGVnYW1vcyBvIGNhbWluaG8gZG8gU1ZHIGUgaW52b2NhbW9zIG9cbiAgICAvLyBub3NzbyBzZXJ2aWNlIHF1ZSB2YWkgYmFpeMOhLWxvLlxuICAgIHRoaXMuc2V0U3ZnQ29udGVudCh2YWx1ZSk7XG4gIH1cblxuICBwcml2YXRlIHNldFN2Z0NvbnRlbnQoc3JjOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAvLyBCYWl4YW1vcyBvIFNWRyBkbyBzZXJ2aWNlIGUgYXRyaWJ1w61tb3NcbiAgICAvLyDDoCBub3NzYSB2YXJpw6F2ZWwgcXVlIMOpIHJlbmRlcml6YWRhIG5vIHRlbXBsYXRlXG4gICAgdGhpcy5zdmdDb250ZW50ID0gdGhpcy5zdmdJbWFnZVNlcnZpY2VcbiAgICAgIC5nZXRTdmdDb250ZW50KHNyYylcbiAgICAgIC5waXBlKG1hcChcbiAgICAgICAgY29udGVudCA9PiB0aGlzLnNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0SHRtbChjb250ZW50KVxuICAgICAgKSk7XG4gIH1cbn1cbiIsIjxkaXYgY2xhc3M9XCJpY29uLWlubmVyXCIgW2lubmVySFRNTF09XCJzdmdDb250ZW50IHwgYXN5bmNcIj48L2Rpdj4iXX0=