import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Medico } from '../services/medico';
import { GetMedicosService } from '../services/get-medicos.service';
import { HistoricoApiService } from '../services/historico-api.service';
import { Consulta } from '../services/consulta';

@Component({
  selector: 'app-nova-consulta',
  templateUrl: './nova-consulta.component.html',
  styleUrls: ['./nova-consulta.component.css']
})
export class NovaConsultaComponent implements OnInit {

  form: FormGroup;
  medicos: Medico[];
  id: string;
  selectedMedico: string;

  constructor(private router: Router,
    private medicosApi: GetMedicosService,
    private historicoApi: HistoricoApiService,
    public route: ActivatedRoute,
    public snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has("idUser")) {
        this.id = paramMap.get("idUser") ?? "";
      }
    });
    this.medicosApi.get().subscribe({
      next: (response) => {
        this.medicos = response ?? [];
      }
    });
    this.form = new FormGroup({
      medico: new FormControl(null, {
        validators: [Validators.required]
      }),
      motivo: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(20)]
      }),
      dateOfBirth: new FormControl(null, {
        validators: [Validators.required]
      }),
    })
  }

  addConsulta(): void {
    if (this.form.invalid) return;
    const novaConsulta: Consulta = {
      data: this.form.value.data,
      motivo: this.form.value.motivo,
      id_medico: this.form.value.id,
      nome_medico: this.selectedMedico,
      id_paciente: this.id,
    }
    this.historicoApi.post(novaConsulta).subscribe(
      response => {
        if (response.status == 200 && response.body['idUser'] != null) {
          this.router.navigate(['historicoConsulta', response.body['idUser']]);
        } else  {
          this.snackBar.open(response.body['msg'], 'Fechar', {
            duration: 5000,
            horizontalPosition: 'center',
            verticalPosition: 'top',
          });
        }
      }
    )
  }


}
