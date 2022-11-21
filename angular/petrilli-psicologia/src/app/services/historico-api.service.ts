import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Cons, Observable } from 'rxjs';
import { Consulta } from './consulta';
import { ConsultaLista } from './consulta-lista';

@Injectable({
  providedIn: 'root'
})
export class HistoricoApiService {

  constructor(private http: HttpClient) { }

  public get(nome: String): Observable<ConsultaLista> {
    return this.http.get<ConsultaLista>(`http://localhost:5000/historicoConsultasPaciente/${ nome }`);
  }

  public post(consulta: Consulta): Observable<HttpResponse<any>> {
    console.log(consulta);
     return this.http.post('http://localhost:5000/marcandoConsulta', consulta, { observe: 'response' });
  }
}
