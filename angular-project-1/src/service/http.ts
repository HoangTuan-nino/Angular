import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpResponse,
  HttpRequest,
  HttpEventType,
} from '@angular/common/http';
import { throwError, of, Observable, Observer } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class HttpService {
  constructor(private httpClient: HttpClient) {}

  get(url, headers?: HttpHeaders): Observable<any> {
    return this.httpClient.get(url, { headers });
  }
  post(url, data, headers?: HttpHeaders): Observable<any> {
    return this.httpClient.post(url, data, { headers });
  }
  put(url, data, headers?: HttpHeaders): Observable<any> {
    return this.httpClient.put(url, data, { headers });
  }
  delete(url, headers?: HttpHeaders): Observable<any> {
    return this.httpClient.delete(url, { headers });
  }
}
