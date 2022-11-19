import { Component, OnInit, Input } from '@angular/core';
import { Consulta } from '../services/consulta';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-historico-card',
  templateUrl: './historico-card.component.html',
  styleUrls: ['./historico-card.component.css']
})
export class HistoricoCardComponent implements OnInit {

  @Input() consulta: Consulta | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
