import { SafeHtml, DomSanitizer } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { SvgImageService } from './svg-image.service';
import * as i0 from "@angular/core";
export declare class SvgImageComponent {
    private sanitizer;
    private svgImageService;
    size: 'small' | 'large' | 'default';
    svgContent: Observable<SafeHtml> | undefined;
    constructor(sanitizer: DomSanitizer, svgImageService: SvgImageService);
    set src(value: string);
    private setSvgContent;
    static ɵfac: i0.ɵɵFactoryDeclaration<SvgImageComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SvgImageComponent, "svg-image", never, { "size": { "alias": "size"; "required": false; }; "src": { "alias": "src"; "required": false; }; }, {}, never, never, false, never>;
}
