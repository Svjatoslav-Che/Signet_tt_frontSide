import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Observable} from "rxjs";
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { isPlatformServer } from '@angular/common';
import { environment } from '../../environments/environment';

@Injectable()
export class ApiService {
  private isServer: boolean;

  constructor(
    private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: Object) {
    this.isServer = isPlatformServer(platformId);
  }

  public get<T>(path: string, params: HttpParams = new HttpParams()): Observable<T> {
      const url = environment.host_url;
      return this.http.get<T>(`${url}${path}`, { headers: this.setHeaders(), params });
    }

  private setHeaders(): HttpHeaders {
    const headersFields: any = {
      // 'Access-Control-Allow-Origin': '*',
      // 'Content-Type': 'application/json',
      // Accept: 'application/json',
      // 'Access-Control-Allow-Credentials': 'true'
    };
    return new HttpHeaders(headersFields);
  }

}
