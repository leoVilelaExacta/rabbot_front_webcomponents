import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from 'menuPrincipal';

const routes: Routes = [
  { path: 'menu-principal', component: MenuComponent, pathMatch: 'full' },
  // ... suas outras rotas
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
