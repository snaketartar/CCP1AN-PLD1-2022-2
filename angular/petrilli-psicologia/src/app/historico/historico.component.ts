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
  public nome: string;

  constructor(private historicoApi: HistoricoApiService, public route: ActivatedRoute) { 
  }

  ngOnInit(): void {
    console.log("chegou no historico");
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if(paramMap.has("idUser")){
        this.nome = paramMap.get("idUser") ?? "";
      }
    });
    this.historicoApi.get(this.nome).subscribe({
      next: (response) => {
        this.listaConsultas = response ?? [];
      }
    });
  }
}
