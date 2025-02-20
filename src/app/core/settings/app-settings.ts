import { Injectable } from '@angular/core';
import { EndPoint } from './app-endpoints';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})

export class AppSettings {


  public marvelKeys = {
    publicKey: environment.publicKey,
  }

  public app = {
    name: 'Ion Super Heroes',
    version: '1.0.0',
  };
}
