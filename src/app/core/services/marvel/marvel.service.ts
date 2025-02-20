import { Injectable } from '@angular/core';
import { Http } from '@capacitor-community/http';
import { from, Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpMethod } from '../../common/http-methods';
import { generateAuthParams } from '../../helpers/auth.helper';
import { IOptions } from '../../interfaces/options.interface';

@Injectable({
  providedIn: 'root',
})

export class MarvelApiService {
  private authParams: Record<string, string> = {};

  constructor() {
    this.authParams = generateAuthParams();
  }

  request(
    method: HttpMethod,
    endpoint: string,
    params?: Record<string, any>,
    data?: any,
  ): Observable<any> {
    const url = endpoint;

    const options: IOptions = {
      url,
      method,
      params: { ...this.authParams, ...params }
    };

    if (['POST', 'PUT', 'PATCH'].includes(method)) {
      options.data = data;
    }

    return from(Http.request(options)).pipe(
      map((response) => response.data),
      catchError((error) => throwError(() => error))
    );
  }
}
