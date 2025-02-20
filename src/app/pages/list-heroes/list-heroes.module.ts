import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ListHeroesPageRoutingModule } from './list-heroes-routing.module';
import { ListHeroesPage } from './list-heroes.page';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListHeroesPageRoutingModule,
    TranslateModule,
  ],
  declarations: [ListHeroesPage]
})

export class ListHeroesPageModule {}
