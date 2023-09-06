import { NgModule } from '@angular/core';
import { MenuComponent } from './menu/menu.component';
import { SvgImageComponent } from './svg-image/svg-image.component';
import { CommonModule } from '@angular/common';
import * as i0 from "@angular/core";
//import { runAt } from 'src/environments/develop';
// const coreModules = [BrowserModule, CommonModule];
const coreModules = [CommonModule];
export class MenuPrincipalModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.3", ngImport: i0, type: MenuPrincipalModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.3", ngImport: i0, type: MenuPrincipalModule, declarations: [MenuComponent,
            SvgImageComponent], imports: [CommonModule], exports: [MenuComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.3", ngImport: i0, type: MenuPrincipalModule, imports: [coreModules] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.3", ngImport: i0, type: MenuPrincipalModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        MenuComponent,
                        SvgImageComponent
                    ],
                    imports: coreModules,
                    exports: [
                        MenuComponent
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS1wcmluY2lwYWwubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbWVudS1wcmluY2lwYWwvc3JjL2xpYi9tZW51LXByaW5jaXBhbC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3RELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7QUFFL0MsbURBQW1EO0FBR25ELHFEQUFxRDtBQUNyRCxNQUFNLFdBQVcsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBWW5DLE1BQU0sT0FBTyxtQkFBbUI7OEdBQW5CLG1CQUFtQjsrR0FBbkIsbUJBQW1CLGlCQVI1QixhQUFhO1lBQ2IsaUJBQWlCLGFBTEEsWUFBWSxhQVM3QixhQUFhOytHQUdKLG1CQUFtQixZQUxyQixXQUFXOzsyRkFLVCxtQkFBbUI7a0JBVi9CLFFBQVE7bUJBQUM7b0JBQ1IsWUFBWSxFQUFFO3dCQUNaLGFBQWE7d0JBQ2IsaUJBQWlCO3FCQUNsQjtvQkFDRCxPQUFPLEVBQUUsV0FBVztvQkFDcEIsT0FBTyxFQUFFO3dCQUNQLGFBQWE7cUJBQ2Q7aUJBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNZW51Q29tcG9uZW50IH0gZnJvbSAnLi9tZW51L21lbnUuY29tcG9uZW50JztcbmltcG9ydCB7IFN2Z0ltYWdlQ29tcG9uZW50IH0gZnJvbSAnLi9zdmctaW1hZ2Uvc3ZnLWltYWdlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuLy9pbXBvcnQgeyBydW5BdCB9IGZyb20gJ3NyYy9lbnZpcm9ubWVudHMvZGV2ZWxvcCc7XG5cblxuLy8gY29uc3QgY29yZU1vZHVsZXMgPSBbQnJvd3Nlck1vZHVsZSwgQ29tbW9uTW9kdWxlXTtcbmNvbnN0IGNvcmVNb2R1bGVzID0gW0NvbW1vbk1vZHVsZV07XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIE1lbnVDb21wb25lbnQsXG4gICAgU3ZnSW1hZ2VDb21wb25lbnRcbiAgXSxcbiAgaW1wb3J0czogY29yZU1vZHVsZXMsXG4gIGV4cG9ydHM6IFtcbiAgICBNZW51Q29tcG9uZW50XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTWVudVByaW5jaXBhbE1vZHVsZSB7XG4gIC8qc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVyczxNZW51UHJpbmNpcGFsTW9kdWxlPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBNZW51UHJpbmNpcGFsTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXVxuICAgIH07XG4gIH0qL1xufVxuIl19