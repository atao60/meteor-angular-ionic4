import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export function loadHomeModule() {
    return import('.pages/home/home.module#HomeModule').then(({ HomeModule }) => HomeModule);
};

export function loadDetailModule() {
    return import('./pages/detail/detail.module#DetailModule').then(({ DetailModule }) => DetailModule);
};

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', loadChildren: loadHomeModule },
    { path: 'detail/:id', loadChildren: loadDetailModule }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
