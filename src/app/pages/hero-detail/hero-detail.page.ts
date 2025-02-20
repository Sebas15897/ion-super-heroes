import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { LoadHeroDetailAction } from '../../core/store/hero/hero.actions';
import { HeroState } from '../../core/store/hero/hero.state';
import { IHero } from '../../core/interfaces/heroes.interface';
import { ModalController } from '@ionic/angular';
import { LanguageSelectorComponent } from '../../core/components/language-selector/language-selector.component';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.page.html',
  styleUrls: ['./hero-detail.page.scss'],
  standalone: false,
})

export class HeroDetailPage implements OnInit {
  hero$!: Observable<IHero | null>;
  loading$!: Observable<boolean>;
  error$!: Observable<string | null>;

  constructor(
    private route: ActivatedRoute,
    private store: Store,
    private modalCtrl: ModalController
  ) {
    this.hero$ = this.store.select(HeroState.getSelectedHero);
    this.loading$ = this.store.select(HeroState.isLoading);
    this.error$ = this.store.select(HeroState.getError);
  }

  ngOnInit() {
    const heroId = this.route.snapshot.paramMap.get('id');

    if (heroId) {
      this.store.dispatch(new LoadHeroDetailAction(+heroId));
    }
  }

  async openLanguageSelector() {
    const modal = await this.modalCtrl.create({
      component: LanguageSelectorComponent,
    });
    await modal.present();
  }
}
