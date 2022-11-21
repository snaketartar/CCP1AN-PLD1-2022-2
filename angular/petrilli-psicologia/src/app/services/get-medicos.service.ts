import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Medico } from './medico';

@Injectable({
  providedIn: 'root'
})
export class GetMedicosService {

  constructor(private http: HttpClient) { }

  public get(): Observable<Medico[]> {
    return this.http.get<Medico[]>("http://localhost:4000/carregaMedicos");
  }
}
