import { Injectable } from '@angular/core';
import { Http } from '@capacitor-community/http';
import { from, Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { generateMarvelHash } from '../../helpers/auth.helper';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})

export class MarvelApiService {
  private publicKey = environment.publicKey;
  private privateKey = environment.privateKey;

  constructor() {}

  private generateAuthParams() {
    const ts = new Date().getTime().toString();
    const hash = generateMarvelHash(ts, this.publicKey, this.privateKey);
    return { ts, apikey: this.publicKey, hash };
  }

  request(
    method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE',
    endpoint: string,
    params: any = {},
    data: any = {}
  ): Observable<any> {
    const authParams = this.generateAuthParams();
    const url = endpoint;

    const options: any = {
      url,
      method,
      params: method === 'GET' ? { ...authParams, ...params } : authParams,
    };

    if (['POST', 'PUT', 'PATCH'].includes(method)) {
      options.data = data;
    }

    return from(Http.request(options)).pipe(
      map((response) => response.data),
      catchError((error) => {
        return throwError(() => error);
      })
    );
  }
}
