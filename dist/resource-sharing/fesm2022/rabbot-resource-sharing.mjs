import * as i0 from '@angular/core';
import { Injectable, Component, NgModule } from '@angular/core';

class ResourceSharingService {
    constructor() { }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.3", ngImport: i0, type: ResourceSharingService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.3", ngImport: i0, type: ResourceSharingService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.3", ngImport: i0, type: ResourceSharingService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class ResourceSharingComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.3", ngImport: i0, type: ResourceSharingComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.3", type: ResourceSharingComponent, selector: "lib-resourceSharing", ngImport: i0, template: `
    <p>
      resource-sharing works!
    </p>
  `, isInline: true }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.3", ngImport: i0, type: ResourceSharingComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-resourceSharing', template: `
    <p>
      resource-sharing works!
    </p>
  ` }]
        }] });

class SharedStylesComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.3", ngImport: i0, type: SharedStylesComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.3", type: SharedStylesComponent, selector: "lib-share-styles", ngImport: i0, template: "<p>share-styles works!</p>\n", styles: [""] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.3", ngImport: i0, type: SharedStylesComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-share-styles', template: "<p>share-styles works!</p>\n" }]
        }] });

class ResourceSharingModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.3", ngImport: i0, type: ResourceSharingModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.3", ngImport: i0, type: ResourceSharingModule, declarations: [SharedStylesComponent], exports: [SharedStylesComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.3", ngImport: i0, type: ResourceSharingModule }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.3", ngImport: i0, type: ResourceSharingModule, decorators: [{
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

/*
 * Public API Surface of resource-sharing
 */

/**
 * Generated bundle index. Do not edit.
 */

export { ResourceSharingComponent, ResourceSharingModule, ResourceSharingService, SharedStylesComponent };
//# sourceMappingURL=rabbot-resource-sharing.mjs.map
