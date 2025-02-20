import { Injectable } from '@angular/core';
import { Http } from '@capacitor-community/http';
import { BehaviorSubject, from, Observable, throwError } from 'rxjs';
import { catchError, finalize, map } from 'rxjs/operators';
import { LoadingController, ToastController } from '@ionic/angular';
import { generateMarvelHash } from '../../helpers/auth.helper';
import { AppSettings } from '../../settings/app-settings';

@Injectable({
  providedIn: 'root'
})

export class MarvelApiService {

  private apiUrl = 'https://gateway.marvel.com/v1/public/';
  private publicKey = 'TU_PUBLIC_KEY';
  private privateKey = 'TU_PRIVATE_KEY';
  private isLoading = new BehaviorSubject<boolean>(false);

  constructor(
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private appSettings: AppSettings
  ) {}

  private async showLoader() {
    if (!this.isLoading.value) {
      this.isLoading.next(true);
      const loading = await this.loadingCtrl.create({ message: 'Cargando...' });
      await loading.present();
    }
  }

  private async hideLoader() {
    if (this.isLoading.value) {
      this.isLoading.next(false);
      await this.loadingCtrl.dismiss();
    }
  }

  private async showError(message: string) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 3000,
      color: 'danger'
    });
    await toast.present();
  }

  request(endpoint: string, params: any = {}): Observable<any> {
    const ts = new Date().getTime().toString();
    const hash = generateMarvelHash(ts, this.publicKey, this.privateKey);

    params = {
      ...params,
      ts,
      apikey: this.publicKey,
      hash
    };

    this.showLoader();

    return from(Http.get({ url: `${this.apiUrl}${endpoint}`, params })).pipe(
      map(response => response.data),
      catchError(error => {
        this.showError(`Error: ${error.message || 'Error en la API de Marvel'}`);
        return throwError(() => error);
      }),
      finalize(() => this.hideLoader())
    );
  }
}
