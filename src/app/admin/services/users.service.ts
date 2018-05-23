import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
import 'rxjs/add/observable/throw';

import { User } from '../models/user.model';

@Injectable()
export class UsersService {

apiPath : string ='http://localhost:3000/users';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http
      .get<User[]>(this.apiPath)
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }

  getUser(payload: User): Observable<User[]> {
    return this.http
      .get<User>(this.apiPath+`/${payload.id}`)
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }

  createUser(payload: User): Observable<User> {
    return this.http
      .post<User>(this.apiPath, payload)
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }

  updateUser(payload: User): Observable<User> {
    return this.http
      .put<User>(this.apiPath+`/${payload.id}`, payload)
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }

  removeUser(payload: User): Observable<User> {
    return this.http
      .delete<any>(this.apiPath+`/${payload.id}`)
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }
}
