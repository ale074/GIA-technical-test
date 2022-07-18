import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  public findUserById(uid: string) {
    return this.http.post(
      'http://localhost:8080/user/findUserById',
      {
        "id": uid
      },
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json; charset=UTF-8',
          'Access-Control-Allow-Origin': '*'
        })
      }).toPromise();
  }
}
