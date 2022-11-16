import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserPost } from './user-post';

@Injectable({
  providedIn: 'root'
})
export class LoginApiService {

  constructor(private http: HttpClient) { }

  public post(user: UserPost): Observable<Object> {
    return this.http.post('http://localhost:2000/login', user);
  }
}
