import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MarvelApiService } from '../marvel-interceptor/marvel-interceptor.service';
import { AppSettings } from '../../settings/app-settings';
import { IHeroesReponse } from '../../interfaces/heroes.interface';

@Injectable({
  providedIn: 'root',
})

export class MarvelService {
  constructor(
    private apiService: MarvelApiService,
    private appSettings: AppSettings
  ) {}

  getHeroes(): Observable<IHeroesReponse> {
    const endpoint = this.appSettings.hero.urls.base;
    return this.apiService.request('GET', endpoint, { limit: '20' });
  }

  getHeroById(heroId: number): Observable<any> {
    const endpoint = `${this.appSettings.hero.urls.base}/${heroId}`;
    return this.apiService.request('GET', endpoint);
  }
}
