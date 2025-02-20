import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoadHeroesAction } from '../../core/store/hero/hero.actions';
import { Store } from '@ngxs/store';
import { Observable, Subject } from 'rxjs';
import { HeroState } from '../../core/store/hero/hero.state';
import { IHero } from '../../core/interfaces/heroes.interface';
import { takeUntil } from 'rxjs/operators';
import { Router } from '@angular/router';
import { LanguageSelectorComponent } from '../../core/components/language-selector/language-selector.component';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-list-heroes',
  templateUrl: './list-heroes.page.html',
  styleUrls: ['./list-heroes.page.scss'],
  standalone: false,
})

export class ListHeroesPage implements OnInit, OnDestroy {
  heroes$: Observable<IHero[]>;
  loading$: Observable<boolean>;
  error$: Observable<string | null>;

  private destroy$ = new Subject<void>();

  constructor(
    private store: Store,
    private router: Router,
    private modalCtrl: ModalController
  ) {
    this.heroes$ = this.store.select(HeroState.getHeroes);
    this.loading$ = this.store.select(HeroState.isLoading);
    this.error$ = this.store.select(HeroState.getError);
  }

  ngOnInit() {
    this.loadHeroes();
  }

  loadHeroes(event?: any) {
    this.store
      .dispatch(new LoadHeroesAction())
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        if (event) {
          event.target.complete();
        }
      });
  }

  goToHeroDetail(hero: IHero) {
    this.router.navigate(['/hero-detail', hero.id], { state: { hero } });
  }

  async openLanguageSelector() {
    const modal = await this.modalCtrl.create({
      component: LanguageSelectorComponent,
    });
    await modal.present();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
