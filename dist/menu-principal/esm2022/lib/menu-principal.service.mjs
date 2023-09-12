import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
export class MenuPrincipalService {
    constructor() {
        this.themeSubject = new BehaviorSubject(localStorage.getItem(MenuPrincipalService.THEME_KEY) || 'light');
        this.theme$ = this.themeSubject.asObservable();
    }
    static { this.THEME_KEY = 'current-theme'; }
    setTheme(theme) {
        localStorage.setItem(MenuPrincipalService.THEME_KEY, theme);
        this.themeSubject.next(theme);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.3", ngImport: i0, type: MenuPrincipalService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.3", ngImport: i0, type: MenuPrincipalService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.3", ngImport: i0, type: MenuPrincipalService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS1wcmluY2lwYWwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL21lbnUtcHJpbmNpcGFsL3NyYy9saWIvbWVudS1wcmluY2lwYWwuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxNQUFNLENBQUM7O0FBS3ZDLE1BQU0sT0FBTyxvQkFBb0I7SUFIakM7UUFNVSxpQkFBWSxHQUE0QixJQUFJLGVBQWUsQ0FDakUsWUFBWSxDQUFDLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxTQUFTLENBQUMsSUFBSSxPQUFPLENBQ2hFLENBQUM7UUFDRixXQUFNLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLEVBQUUsQ0FBQztLQU8zQzthQVhlLGNBQVMsR0FBRyxlQUFlLEFBQWxCLENBQW1CO0lBTTFDLFFBQVEsQ0FBQyxLQUFhO1FBQ3BCLFlBQVksQ0FBQyxPQUFPLENBQUMsb0JBQW9CLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzVELElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2hDLENBQUM7OEdBWFUsb0JBQW9CO2tIQUFwQixvQkFBb0IsY0FGbkIsTUFBTTs7MkZBRVAsb0JBQW9CO2tCQUhoQyxVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBNZW51UHJpbmNpcGFsU2VydmljZSB7XG5cbiAgcHVibGljIHN0YXRpYyBUSEVNRV9LRVkgPSAnY3VycmVudC10aGVtZSc7XG4gIHByaXZhdGUgdGhlbWVTdWJqZWN0OiBCZWhhdmlvclN1YmplY3Q8c3RyaW5nPiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8c3RyaW5nPihcbiAgICBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShNZW51UHJpbmNpcGFsU2VydmljZS5USEVNRV9LRVkpIHx8ICdsaWdodCdcbiAgKTtcbiAgdGhlbWUkID0gdGhpcy50aGVtZVN1YmplY3QuYXNPYnNlcnZhYmxlKCk7XG5cbiAgc2V0VGhlbWUodGhlbWU6IHN0cmluZykge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKE1lbnVQcmluY2lwYWxTZXJ2aWNlLlRIRU1FX0tFWSwgdGhlbWUpO1xuICAgIHRoaXMudGhlbWVTdWJqZWN0Lm5leHQodGhlbWUpO1xuICB9XG5cbn1cbiJdfQ==