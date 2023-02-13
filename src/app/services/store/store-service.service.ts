import { Injectable } from '@angular/core';
import { Service } from 'src/app/models/service';
import { Result, SignInCredentials } from 'src/app/shared/models/exports';
import { map, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class StoreServiceService {
  constructor(private _http: HttpClient) {}
  private url: string = environment.url;

  getAllServices(): Observable<Result<Service[]>> {
    const headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json; charset=utf-8;');
    headers.append('Access-Control-Allow-Origin', '*');
    return this._http.get(this.url + 'services', { headers: headers }).pipe(
      map((data: any) => {
        if (data.status == 500) {
          return { error: data.detail };
        } else {
          return { result: data as Service[] };
        }
      })
    );
  }
}
