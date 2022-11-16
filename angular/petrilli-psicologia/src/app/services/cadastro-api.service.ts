import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CadastroPost } from './cadastro-post';

@Injectable({
  providedIn: 'root'
})
export class CadastroApiService {

  constructor(private http: HttpClient) { }

  public post(newUser: CadastroPost): Observable<Object> {
    return this.http.post('http://localhost:4000/cadastro', newUser);
  }
}
