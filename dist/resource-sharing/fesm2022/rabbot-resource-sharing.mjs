import * as i0 from '@angular/core';
import { Injectable, Component, NgModule } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

class ResourceSharingService {
    constructor() { }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.5", ngImport: i0, type: ResourceSharingService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.5", ngImport: i0, type: ResourceSharingService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.5", ngImport: i0, type: ResourceSharingService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class ResourceSharingComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.5", ngImport: i0, type: ResourceSharingComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.5", type: ResourceSharingComponent, selector: "lib-resourceSharing", ngImport: i0, template: `
    <p>
      resource-sharing works!
    </p>
  `, isInline: true }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.5", ngImport: i0, type: ResourceSharingComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-resourceSharing', template: `
    <p>
      resource-sharing works!
    </p>
  ` }]
        }] });

class SharedStylesComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.5", ngImport: i0, type: SharedStylesComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.5", type: SharedStylesComponent, selector: "lib-share-styles", ngImport: i0, template: "<p>share-styles works!</p>\n", styles: [""] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.5", ngImport: i0, type: SharedStylesComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-share-styles', template: "<p>share-styles works!</p>\n" }]
        }] });

class ResourceSharingModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.5", ngImport: i0, type: ResourceSharingModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.5", ngImport: i0, type: ResourceSharingModule, declarations: [SharedStylesComponent], exports: [SharedStylesComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.5", ngImport: i0, type: ResourceSharingModule }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.5", ngImport: i0, type: ResourceSharingModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        SharedStylesComponent
                    ],
                    imports: [],
                    exports: [
                        SharedStylesComponent
                    ]
                }]
        }] });

class ThemesService {
    constructor() {
        this.themeSubject = new BehaviorSubject(localStorage.getItem(ThemesService.THEME_KEY) || 'light');
        this.theme$ = this.themeSubject.asObservable();
    }
    static { this.THEME_KEY = 'current-theme'; }
    setTheme(theme) {
        localStorage.setItem(ThemesService.THEME_KEY, theme);
        this.themeSubject.next(theme);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.5", ngImport: i0, type: ThemesService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.5", ngImport: i0, type: ThemesService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.5", ngImport: i0, type: ThemesService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }] });

class LanguageService {
    static { this.LANGUAGE_KEY = 'current-language'; }
    setLanguage(language) {
        localStorage.setItem(LanguageService.LANGUAGE_KEY, language);
        this.languageSubject.next(language);
    }
    constructor() {
        this.languageSubject = new BehaviorSubject(localStorage.getItem(LanguageService.LANGUAGE_KEY) || 'pt');
        this.language$ = this.languageSubject.asObservable();
        window.addEventListener('storage', (event) => {
            if (event.key === LanguageService.LANGUAGE_KEY) {
                const language = event.newValue !== null ? event.newValue : 'pt';
                this.setLanguage(language);
            }
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.5", ngImport: i0, type: LanguageService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.5", ngImport: i0, type: LanguageService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.5", ngImport: i0, type: LanguageService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

/*
 * Public API Surface of resource-sharing
 */

/**
 * Generated bundle index. Do not edit.
 */

export { LanguageService, ResourceSharingComponent, ResourceSharingModule, ResourceSharingService, SharedStylesComponent, ThemesService };
//# sourceMappingURL=rabbot-resource-sharing.mjs.map
