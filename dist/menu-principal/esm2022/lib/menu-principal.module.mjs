import { NgModule } from '@angular/core';
import { MenuComponent } from './menu/menu.component';
import { SvgImageComponent } from './svg-image/svg-image.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import * as i0 from "@angular/core";
import * as i1 from "@ngx-translate/core";
// import { BrowserModule } from '@angular/platform-browser';
//import { runAt } from 'src/environments/develop';
let injector;
export function HttpLoaderFactory(http) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
// const coreModules = [BrowserModule, CommonModule];
// const coreModules = [CommonModule];
export class MenuPrincipalModule {
    constructor(inj) {
        this.inj = inj;
        injector = this.inj;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.5", ngImport: i0, type: MenuPrincipalModule, deps: [{ token: i0.Injector }], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.5", ngImport: i0, type: MenuPrincipalModule, declarations: [MenuComponent,
            SvgImageComponent], imports: [CommonModule,
            HttpClientModule, i1.TranslateModule], exports: [MenuComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.5", ngImport: i0, type: MenuPrincipalModule, imports: [CommonModule,
            HttpClientModule,
            TranslateModule.forRoot({
                loader: {
                    provide: TranslateLoader,
                    useFactory: HttpLoaderFactory,
                    deps: [HttpClient]
                }
            })] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.5", ngImport: i0, type: MenuPrincipalModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        MenuComponent,
                        SvgImageComponent
                    ],
                    imports: [
                        CommonModule,
                        HttpClientModule,
                        TranslateModule.forRoot({
                            loader: {
                                provide: TranslateLoader,
                                useFactory: HttpLoaderFactory,
                                deps: [HttpClient]
                            }
                        })
                    ],
                    exports: [
                        MenuComponent
                    ]
                }]
        }], ctorParameters: function () { return [{ type: i0.Injector }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS1wcmluY2lwYWwubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbWVudS1wcmluY2lwYWwvc3JjL2xpYi9tZW51LXByaW5jaXBhbC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFZLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDdEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDcEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNwRSxPQUFPLEVBQUUsZUFBZSxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDOzs7QUFDakUsNkRBQTZEO0FBQzdELG1EQUFtRDtBQUVuRCxJQUFJLFFBQWtCLENBQUM7QUFFdkIsTUFBTSxVQUFVLGlCQUFpQixDQUFDLElBQWdCO0lBQ2hELE9BQU8sSUFBSSxtQkFBbUIsQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDbEUsQ0FBQztBQUVELHFEQUFxRDtBQUNyRCxzQ0FBc0M7QUFzQnRDLE1BQU0sT0FBTyxtQkFBbUI7SUFDOUIsWUFBb0IsR0FBYTtRQUFiLFFBQUcsR0FBSCxHQUFHLENBQVU7UUFDL0IsUUFBUSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDdEIsQ0FBQzs4R0FIVSxtQkFBbUI7K0dBQW5CLG1CQUFtQixpQkFsQjVCLGFBQWE7WUFDYixpQkFBaUIsYUFHakIsWUFBWTtZQUNaLGdCQUFnQixpQ0FVaEIsYUFBYTsrR0FHSixtQkFBbUIsWUFkNUIsWUFBWTtZQUNaLGdCQUFnQjtZQUNoQixlQUFlLENBQUMsT0FBTyxDQUFDO2dCQUN0QixNQUFNLEVBQUU7b0JBQ04sT0FBTyxFQUFFLGVBQWU7b0JBQ3hCLFVBQVUsRUFBRSxpQkFBaUI7b0JBQzdCLElBQUksRUFBRSxDQUFDLFVBQVUsQ0FBQztpQkFDbkI7YUFDRixDQUFDOzsyRkFNTyxtQkFBbUI7a0JBcEIvQixRQUFRO21CQUFDO29CQUNSLFlBQVksRUFBRTt3QkFDWixhQUFhO3dCQUNiLGlCQUFpQjtxQkFDbEI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osZ0JBQWdCO3dCQUNoQixlQUFlLENBQUMsT0FBTyxDQUFDOzRCQUN0QixNQUFNLEVBQUU7Z0NBQ04sT0FBTyxFQUFFLGVBQWU7Z0NBQ3hCLFVBQVUsRUFBRSxpQkFBaUI7Z0NBQzdCLElBQUksRUFBRSxDQUFDLFVBQVUsQ0FBQzs2QkFDbkI7eUJBQ0YsQ0FBQztxQkFDSDtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsYUFBYTtxQkFDZDtpQkFDRiIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgSW5qZWN0b3IsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNZW51Q29tcG9uZW50IH0gZnJvbSAnLi9tZW51L21lbnUuY29tcG9uZW50JztcbmltcG9ydCB7IFN2Z0ltYWdlQ29tcG9uZW50IH0gZnJvbSAnLi9zdmctaW1hZ2Uvc3ZnLWltYWdlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSwgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IFRyYW5zbGF0ZU1vZHVsZSwgVHJhbnNsYXRlTG9hZGVyIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvY29yZSc7XG5pbXBvcnQgeyBUcmFuc2xhdGVIdHRwTG9hZGVyIH0gZnJvbSAnQG5neC10cmFuc2xhdGUvaHR0cC1sb2FkZXInO1xuLy8gaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuLy9pbXBvcnQgeyBydW5BdCB9IGZyb20gJ3NyYy9lbnZpcm9ubWVudHMvZGV2ZWxvcCc7XG5cbmxldCBpbmplY3RvcjogSW5qZWN0b3I7XG5cbmV4cG9ydCBmdW5jdGlvbiBIdHRwTG9hZGVyRmFjdG9yeShodHRwOiBIdHRwQ2xpZW50KSB7XG4gIHJldHVybiBuZXcgVHJhbnNsYXRlSHR0cExvYWRlcihodHRwLCAnLi9hc3NldHMvaTE4bi8nLCAnLmpzb24nKTtcbn1cblxuLy8gY29uc3QgY29yZU1vZHVsZXMgPSBbQnJvd3Nlck1vZHVsZSwgQ29tbW9uTW9kdWxlXTtcbi8vIGNvbnN0IGNvcmVNb2R1bGVzID0gW0NvbW1vbk1vZHVsZV07XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIE1lbnVDb21wb25lbnQsXG4gICAgU3ZnSW1hZ2VDb21wb25lbnRcbiAgXSxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBIdHRwQ2xpZW50TW9kdWxlLFxuICAgIFRyYW5zbGF0ZU1vZHVsZS5mb3JSb290KHtcbiAgICAgIGxvYWRlcjoge1xuICAgICAgICBwcm92aWRlOiBUcmFuc2xhdGVMb2FkZXIsXG4gICAgICAgIHVzZUZhY3Rvcnk6IEh0dHBMb2FkZXJGYWN0b3J5LFxuICAgICAgICBkZXBzOiBbSHR0cENsaWVudF1cbiAgICAgIH1cbiAgICB9KVxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgTWVudUNvbXBvbmVudFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIE1lbnVQcmluY2lwYWxNb2R1bGUge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGluajogSW5qZWN0b3IpIHtcbiAgICBpbmplY3RvciA9IHRoaXMuaW5qO1xuICB9XG59XG4iXX0=