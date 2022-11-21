import { Component, OnInit, Input } from '@angular/core';
import { ConsultaListada } from '../services/consulta-listada';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-historico-card',
  templateUrl: './historico-card.component.html',
  styleUrls: ['./historico-card.component.css']
})
export class HistoricoCardComponent implements OnInit {

  @Input() consulta: ConsultaListada;

  constructor() { }

  ngOnInit(): void {
  }

}
