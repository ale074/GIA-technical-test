import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }
  public login(email: string, password: string) {
    
    console.log(email, password);
    return this.http.post(
      'http://localhost:8080/user/loginUser',
      {
        "email": email,
        "password": password
      },
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json; charset=UTF-8',
          'Access-Control-Allow-Origin': '*'
        })
      }).toPromise();
  }
}
