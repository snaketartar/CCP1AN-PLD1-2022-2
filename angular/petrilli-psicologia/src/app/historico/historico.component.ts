import { Component, OnInit } from '@angular/core';
import { Consulta } from '../services/consulta';
import { HistoricoApiService } from '../services/historico-api.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-historico',
  templateUrl: './historico.component.html',
  styleUrls: ['./historico.component.css']
})
export class HistoricoComponent implements OnInit {

  listaConsultas: Consulta[] = [];
  private id: string;

  constructor(private historicoApi: HistoricoApiService, public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if(paramMap.has("idUser")){
        this.id = paramMap.get("idUser") ?? "";
      }
    });
    this.historicoApi.get(this.id).subscribe({
      next: (response) => {
        this.listaConsultas = response ?? [];
      }
    });
  }
}
