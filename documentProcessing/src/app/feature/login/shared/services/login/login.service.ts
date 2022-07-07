import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }
  public login(email: string, password: string) {
    return this.http.post(
      'localHost:',
      {
        'email': email,
        'password': password
      },
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json; charset=UTF-8',
        })
      }).toPromise();
  }
}
