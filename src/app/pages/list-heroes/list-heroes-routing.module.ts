import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListHeroesPage } from './list-heroes.page';

const routes: Routes = [
  {
    path: '',
    component: ListHeroesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListHeroesPageRoutingModule {}
