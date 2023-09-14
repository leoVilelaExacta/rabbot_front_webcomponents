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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.5", ngImport: i0, type: MenuPrincipalService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.5", ngImport: i0, type: MenuPrincipalService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.5", ngImport: i0, type: MenuPrincipalService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS1wcmluY2lwYWwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL21lbnUtcHJpbmNpcGFsL3NyYy9saWIvbWVudS1wcmluY2lwYWwuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxNQUFNLENBQUM7O0FBS3ZDLE1BQU0sT0FBTyxvQkFBb0I7SUFIakM7UUFNVSxpQkFBWSxHQUE0QixJQUFJLGVBQWUsQ0FDakUsWUFBWSxDQUFDLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxTQUFTLENBQUMsSUFBSSxPQUFPLENBQ2hFLENBQUM7UUFDRixXQUFNLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLEVBQUUsQ0FBQztLQU8zQzthQVhlLGNBQVMsR0FBRyxlQUFlLENBQUM7SUFNMUMsUUFBUSxDQUFDLEtBQWE7UUFDcEIsWUFBWSxDQUFDLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDNUQsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDaEMsQ0FBQzs4R0FYVSxvQkFBb0I7a0hBQXBCLG9CQUFvQixjQUZuQixNQUFNOzsyRkFFUCxvQkFBb0I7a0JBSGhDLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIE1lbnVQcmluY2lwYWxTZXJ2aWNlIHtcblxuICBwdWJsaWMgc3RhdGljIFRIRU1FX0tFWSA9ICdjdXJyZW50LXRoZW1lJztcbiAgcHJpdmF0ZSB0aGVtZVN1YmplY3Q6IEJlaGF2aW9yU3ViamVjdDxzdHJpbmc+ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxzdHJpbmc+KFxuICAgIGxvY2FsU3RvcmFnZS5nZXRJdGVtKE1lbnVQcmluY2lwYWxTZXJ2aWNlLlRIRU1FX0tFWSkgfHwgJ2xpZ2h0J1xuICApO1xuICB0aGVtZSQgPSB0aGlzLnRoZW1lU3ViamVjdC5hc09ic2VydmFibGUoKTtcblxuICBzZXRUaGVtZSh0aGVtZTogc3RyaW5nKSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oTWVudVByaW5jaXBhbFNlcnZpY2UuVEhFTUVfS0VZLCB0aGVtZSk7XG4gICAgdGhpcy50aGVtZVN1YmplY3QubmV4dCh0aGVtZSk7XG4gIH1cblxufVxuIl19