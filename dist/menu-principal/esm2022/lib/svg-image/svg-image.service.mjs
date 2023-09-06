import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import * as i0 from "@angular/core";
export class SvgImageService {
    constructor() {
        // cache com a lista de requisições realizadas
        this.requests = new Map();
    }
    getSvgContent(url) {
        // verificamos se já fizemos uma requisição para essa url
        let req = this.requests.get(url);
        if (!req) {
            // ainda não temos a requisição, então vamos criar uma
            req = fetch(url).then(response => {
                if (response.ok) {
                    return response.text();
                }
                throw new Error('Failed to fetch SVG');
            });
            // armazena a requisição para fazer o cache dela na lista
            this.requests.set(url, req);
        }
        // retorna um observable com a requisição do cache/criada
        return from(req);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.3", ngImport: i0, type: SvgImageService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.3", ngImport: i0, type: SvgImageService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.3", ngImport: i0, type: SvgImageService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3ZnLWltYWdlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9tZW51LXByaW5jaXBhbC9zcmMvbGliL3N2Zy1pbWFnZS9zdmctaW1hZ2Uuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBYyxJQUFJLEVBQUUsTUFBTSxNQUFNLENBQUM7O0FBS3hDLE1BQU0sT0FBTyxlQUFlO0lBSDVCO1FBS0UsOENBQThDO1FBQ3RDLGFBQVEsR0FBRyxJQUFJLEdBQUcsRUFBd0IsQ0FBQztLQXdCcEQ7SUF0QkMsYUFBYSxDQUFDLEdBQVc7UUFDdkIseURBQXlEO1FBQ3pELElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRWpDLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDUixzREFBc0Q7WUFDdEQsR0FBRyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUU7Z0JBQy9CLElBQUksUUFBUSxDQUFDLEVBQUUsRUFBRTtvQkFDZixPQUFPLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztpQkFDeEI7Z0JBRUQsTUFBTSxJQUFJLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1lBQ3pDLENBQUMsQ0FBQyxDQUFDO1lBRUgseURBQXlEO1lBQ3pELElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztTQUM3QjtRQUVELHlEQUF5RDtRQUN6RCxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNuQixDQUFDOzhHQXpCVSxlQUFlO2tIQUFmLGVBQWUsY0FGZCxNQUFNOzsyRkFFUCxlQUFlO2tCQUgzQixVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIGZyb20gfSBmcm9tICdyeGpzJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgU3ZnSW1hZ2VTZXJ2aWNlIHtcblxuICAvLyBjYWNoZSBjb20gYSBsaXN0YSBkZSByZXF1aXNpw6fDtWVzIHJlYWxpemFkYXNcbiAgcHJpdmF0ZSByZXF1ZXN0cyA9IG5ldyBNYXA8c3RyaW5nLCBQcm9taXNlPGFueT4+KCk7XG5cbiAgZ2V0U3ZnQ29udGVudCh1cmw6IHN0cmluZyk6IE9ic2VydmFibGU8c3RyaW5nPiB7XG4gICAgLy8gdmVyaWZpY2Ftb3Mgc2UgasOhIGZpemVtb3MgdW1hIHJlcXVpc2nDp8OjbyBwYXJhIGVzc2EgdXJsXG4gICAgbGV0IHJlcSA9IHRoaXMucmVxdWVzdHMuZ2V0KHVybCk7XG5cbiAgICBpZiAoIXJlcSkge1xuICAgICAgLy8gYWluZGEgbsOjbyB0ZW1vcyBhIHJlcXVpc2nDp8OjbywgZW50w6NvIHZhbW9zIGNyaWFyIHVtYVxuICAgICAgcmVxID0gZmV0Y2godXJsKS50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLnRleHQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignRmFpbGVkIHRvIGZldGNoIFNWRycpO1xuICAgICAgfSk7XG5cbiAgICAgIC8vIGFybWF6ZW5hIGEgcmVxdWlzacOnw6NvIHBhcmEgZmF6ZXIgbyBjYWNoZSBkZWxhIG5hIGxpc3RhXG4gICAgICB0aGlzLnJlcXVlc3RzLnNldCh1cmwsIHJlcSk7XG4gICAgfVxuXG4gICAgLy8gcmV0b3JuYSB1bSBvYnNlcnZhYmxlIGNvbSBhIHJlcXVpc2nDp8OjbyBkbyBjYWNoZS9jcmlhZGFcbiAgICByZXR1cm4gZnJvbShyZXEpO1xuICB9XG4gIFxufVxuIl19