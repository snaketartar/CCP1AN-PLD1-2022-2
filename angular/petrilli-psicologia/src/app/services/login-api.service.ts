import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserPost } from './user-post';
import { LoginResponse } from './login-response';

@Injectable({
  providedIn: 'root'
})
export class LoginApiService {
  private options = {
    headers: new HttpHeaders()
      .set("Content-Type", "application/json")
      .set("observe","response")
  };

  constructor(private http: HttpClient) { }

  public post(user: UserPost): Observable<HttpResponse<any>> {
     return this.http.post<LoginResponse>('http://localhost:2000/login', user, { observe: 'response' });
  }
}
