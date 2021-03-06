import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../models/user.model";
import {environment} from "../../../environments/environment";


const AUTH_API = environment.host+ '/api/auth/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  login(username: string, password: string): Observable<User> {
    return this.http.post<User>(AUTH_API + 'signin', {
      username,
      password
    }, httpOptions);
  }


  register(user:User): Observable<User> {
    return this.http.post<User>(AUTH_API + 'signup', user, httpOptions);
  }
}
