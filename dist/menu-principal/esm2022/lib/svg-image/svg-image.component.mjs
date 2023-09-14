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
        // Classes com tamanhos predefinidos
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.5", ngImport: i0, type: SvgImageComponent, deps: [{ token: i1.DomSanitizer }, { token: i2.SvgImageService }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.5", type: SvgImageComponent, selector: "svg-image", inputs: { size: "size", src: "src" }, host: { properties: { "class": "this.size" } }, ngImport: i0, template: "<div class=\"icon-inner\" [innerHTML]=\"svgContent | async\"></div>", styles: [":host{--icon-font-size: 1em;display:inline-block;width:1em;height:1em;text-align:center;font-size:var(--icon-font-size);contain:strict;fill:currentColor;box-sizing:content-box!important}.icon-inner{display:block;width:100%;height:100%}svg{width:100%;height:100%;max-width:100%;max-height:100%}:host(.small){font-size:18px}:host(.large){font-size:44px}\n"], dependencies: [{ kind: "pipe", type: i3.AsyncPipe, name: "async" }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.ShadowDom }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.5", ngImport: i0, type: SvgImageComponent, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3ZnLWltYWdlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL21lbnUtcHJpbmNpcGFsL3NyYy9saWIvc3ZnLWltYWdlL3N2Zy1pbWFnZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tZW51LXByaW5jaXBhbC9zcmMvbGliL3N2Zy1pbWFnZS9zdmctaW1hZ2UuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTFHLE9BQU8sRUFBYyxHQUFHLEVBQUUsTUFBTSxNQUFNLENBQUM7Ozs7O0FBVXZDLE1BQU0sT0FBTyxpQkFBaUI7SUFTNUIsWUFDVSxTQUF1QixFQUN2QixlQUFnQztRQURoQyxjQUFTLEdBQVQsU0FBUyxDQUFjO1FBQ3ZCLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQVJ4QyxvQ0FBb0M7UUFDdEMsU0FBSSxHQUFrQyxTQUFTLENBQUM7SUFRN0MsQ0FBQztJQUVKLElBQ0ksR0FBRyxDQUFDLEtBQWE7UUFDbkIseUNBQXlDO1FBQ3pDLGtDQUFrQztRQUNsQyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFTyxhQUFhLENBQUMsR0FBVztRQUMvQix5Q0FBeUM7UUFDekMsaURBQWlEO1FBQ2pELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGVBQWU7YUFDbkMsYUFBYSxDQUFDLEdBQUcsQ0FBQzthQUNsQixJQUFJLENBQUMsR0FBRyxDQUNQLE9BQU8sQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyx1QkFBdUIsQ0FBQyxPQUFPLENBQUMsQ0FDM0QsQ0FBQyxDQUFDO0lBQ1AsQ0FBQzs4R0E3QlUsaUJBQWlCO2tHQUFqQixpQkFBaUIsdUlDWjlCLHFFQUErRDs7MkZEWWxELGlCQUFpQjtrQkFQN0IsU0FBUzsrQkFDRSxXQUFXLG1CQUdKLHVCQUF1QixDQUFDLE1BQU0saUJBQ2hDLGlCQUFpQixDQUFDLFNBQVM7O1FBS3hDLG9DQUFvQztRQUN0QyxJQUFJO3NCQUhILEtBQUs7O3NCQUNMLFdBQVc7dUJBQUMsT0FBTztnQkFhaEIsR0FBRztzQkFETixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSG9zdEJpbmRpbmcsIElucHV0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU2FmZUh0bWwsIERvbVNhbml0aXplciB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgbWFwIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBTdmdJbWFnZVNlcnZpY2UgfSBmcm9tICcuL3N2Zy1pbWFnZS5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc3ZnLWltYWdlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N2Zy1pbWFnZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3N2Zy1pbWFnZS5jb21wb25lbnQuc2NzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uU2hhZG93RG9tXG59KVxuZXhwb3J0IGNsYXNzIFN2Z0ltYWdlQ29tcG9uZW50IHtcbiAgQElucHV0KClcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcycpXG4gICAgLy8gQ2xhc3NlcyBjb20gdGFtYW5ob3MgcHJlZGVmaW5pZG9zXG4gIHNpemU6ICdzbWFsbCcgfCAnbGFyZ2UnIHwgJ2RlZmF1bHQnID0gJ2RlZmF1bHQnO1xuXG4gIC8vIFZhcmnDoXZlbCBjb20gYSByZXF1aXNpw6fDo28gZG8gU1ZHIHF1ZSB2YWkgc2VyIHJlbmRlcml6YWRvXG4gIHB1YmxpYyBzdmdDb250ZW50OiBPYnNlcnZhYmxlPFNhZmVIdG1sPiB8IHVuZGVmaW5lZDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHNhbml0aXplcjogRG9tU2FuaXRpemVyLFxuICAgIHByaXZhdGUgc3ZnSW1hZ2VTZXJ2aWNlOiBTdmdJbWFnZVNlcnZpY2VcbiAgKSB7fVxuXG4gIEBJbnB1dCgpXG4gIHNldCBzcmModmFsdWU6IHN0cmluZykge1xuICAgIC8vIFBlZ2Ftb3MgbyBjYW1pbmhvIGRvIFNWRyBlIGludm9jYW1vcyBvXG4gICAgLy8gbm9zc28gc2VydmljZSBxdWUgdmFpIGJhaXjDoS1sby5cbiAgICB0aGlzLnNldFN2Z0NvbnRlbnQodmFsdWUpO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRTdmdDb250ZW50KHNyYzogc3RyaW5nKTogdm9pZCB7XG4gICAgLy8gQmFpeGFtb3MgbyBTVkcgZG8gc2VydmljZSBlIGF0cmlidcOtbW9zXG4gICAgLy8gw6Agbm9zc2EgdmFyacOhdmVsIHF1ZSDDqSByZW5kZXJpemFkYSBubyB0ZW1wbGF0ZVxuICAgIHRoaXMuc3ZnQ29udGVudCA9IHRoaXMuc3ZnSW1hZ2VTZXJ2aWNlXG4gICAgICAuZ2V0U3ZnQ29udGVudChzcmMpXG4gICAgICAucGlwZShtYXAoXG4gICAgICAgIGNvbnRlbnQgPT4gdGhpcy5zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdEh0bWwoY29udGVudClcbiAgICAgICkpO1xuICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwiaWNvbi1pbm5lclwiIFtpbm5lckhUTUxdPVwic3ZnQ29udGVudCB8IGFzeW5jXCI+PC9kaXY+Il19