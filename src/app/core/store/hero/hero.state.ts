import { State, Action, StateContext, Selector } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { LoadHeroesAction, LoadHeroDetailAction } from './hero.actions';
import { tap, catchError, finalize } from 'rxjs/operators';
import { MarvelService } from '../../services/hero/hero.service';
import { throwError } from 'rxjs';
import { IHero } from '../../interfaces/heroes.interface';
import { TranslateService } from '@ngx-translate/core';

export interface HeroStateModel {
  heroes: IHero[];
  selectedHero: IHero | null;
  loading: boolean;
  error: string | null;
}

@State<HeroStateModel>({
  name: 'hero',
  defaults: {
    heroes: [],
    selectedHero: null,
    loading: false,
    error: null,
  },
})

@Injectable()
export class HeroState {
  constructor(private marvelService: MarvelService, private translate: TranslateService) {}

  @Selector()
  static getHeroes(state: HeroStateModel): IHero[] {
    return state.heroes;
  }

  @Selector()
  static getSelectedHero(state: HeroStateModel): IHero | null {
    return state.selectedHero;
  }

  @Selector()
  static isLoading(state: HeroStateModel) {
    return state.loading;
  }

  @Selector()
  static getError(state: HeroStateModel) {
    return state.error;
  }

  // ✅ Traducir mensajes de error dinámicamente
  private getTranslatedErrorMessage(key: string): string {
    let translatedMessage = '';
    this.translate.get(key).subscribe((translation) => {
      translatedMessage = translation;
    });
    return translatedMessage;
  }

  @Action(LoadHeroesAction)
  loadHeroes(ctx: StateContext<HeroStateModel>) {
    ctx.patchState({ loading: true, error: null });

    return this.marvelService.getHeroes().pipe(
      tap((response) => {
        ctx.patchState({ heroes: response.data.results });
      }),
      catchError((error) => {
        const errorMsg = this.getTranslatedErrorMessage('ERROR_LOADING_HEROES');
        ctx.patchState({ error: errorMsg });
        return throwError(() => error);
      }),
      finalize(() => ctx.patchState({ loading: false }))
    );
  }

  @Action(LoadHeroDetailAction)
  loadHeroDetail(ctx: StateContext<HeroStateModel>, action: LoadHeroDetailAction) {
    ctx.patchState({ loading: true, error: null, selectedHero: null });

    return this.marvelService.getHeroById(action.heroId).pipe(
      tap((response) => {
        if (response.data.results.length > 0) {
          ctx.patchState({ selectedHero: response.data.results[0] });
        } else {
          const errorMsg = this.getTranslatedErrorMessage('HERO_NOT_FOUND');
          ctx.patchState({ error: errorMsg });
        }
      }),
      catchError((error) => {
        const errorMsg = this.getTranslatedErrorMessage('ERROR_FETCHING_HERO');
        ctx.patchState({ error: errorMsg });
        return throwError(() => error);
      }),
      finalize(() => ctx.patchState({ loading: false }))
    );
  }
}
