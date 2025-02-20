import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'list-heroes',
    loadChildren: () => import('./pages/list-heroes/list-heroes.module').then( m => m.ListHeroesPageModule)
  },
  {
    path: 'hero-detail',
    loadChildren: () => import('./pages/hero-detail/hero-detail.module').then( m => m.HeroDetailPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
