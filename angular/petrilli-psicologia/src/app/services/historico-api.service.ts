import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Cons, Observable } from 'rxjs';
import { Consulta } from './consulta';

@Injectable({
  providedIn: 'root'
})
export class HistoricoApiService {

  constructor(private http: HttpClient) { }

  public get(id: String): Observable<Consulta[]> {
    return this.http.get<Consulta[]>(`http://localhost:5000/historico/${ id }`);
  }

  public post(consulta: Consulta): Observable<HttpResponse<any>> {
     return this.http.post('http://localhost:5000/historico', consulta, { observe: 'response' });
  }
}
