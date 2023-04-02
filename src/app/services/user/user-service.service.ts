import { Injectable } from '@angular/core';
import { Service } from 'src/app/models/service';
import { Result, SignInCredentials } from 'src/app/shared/models/exports';
import { map, Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ServiceInput } from 'src/app/models/service-input';
import { service, services } from 'src/app/mock/moked-services';
import { user, users } from 'src/app/mock/moked-user';
import { User } from 'src/app/models/user';
import { UserInput } from 'src/app/models/user-input';
@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  constructor(private _http: HttpClient) {}
  private url: string = environment.url;

  getAllUsers(): Observable<Result<User[]>> {
    /*
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
    );*/
    return of({ result: users });
  }

  getOneUser(id: string): Observable<Result<User>> {
    /*
    const headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json; charset=utf-8;');
    headers.append('Access-Control-Allow-Origin', '*');
    return this._http
      .get(this.url + 'services' + id, { headers: headers })
      .pipe(
        map((data: any) => {
          if (data.status == 500) {
            return { error: data.detail };
          } else {
            return { result: data as Service };
          }
        })
      );
      */
    return of({ result: user });
  }

  addUser(data: UserInput): Observable<Result<User>> {
    /*
    const headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json; charset=utf-8;');
    headers.append('Access-Control-Allow-Origin', '*');
    return this._http
      .post(this.url + 'services', service, { headers: headers })
      .pipe(
        map((data: any) => {
          if (data.status == 500) {
            return { error: data.detail };
          } else {
            return { result: data as Service };
          }
        })
      );
      */
    return of({ result: user });
  }

  editUser(data: { data: UserInput; id: string }): Observable<Result<User>> {
    /*
    const headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json; charset=utf-8;');
    headers.append('Access-Control-Allow-Origin', '*');
    return this._http
      .put(this.url + 'services' + data.id, data.data, { headers: headers })
      .pipe(
        map((data: any) => {
          if (data.status == 500) {
            return { error: data.detail };
          } else {
            return { result: data as Service };
          }
        })
      );
        */
    return of({ result: user });
  }
}
