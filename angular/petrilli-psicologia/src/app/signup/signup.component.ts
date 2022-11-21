import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CadastroPost } from '../services/cadastro-post';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CadastroApiService } from '../services/cadastro-api.service';
import { MatFormField } from '@angular/material/form-field';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  form: FormGroup;

  constructor(private router: Router, private api: CadastroApiService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(null, {
        validators: [Validators.required]
      }),
      rg: new FormControl(null, {
        validators: [Validators.required]
      }),
      cpf: new FormControl(null, {
        validators: [Validators.required]
      }),
      dateOfBirth: new FormControl(null, {
        validators: [Validators.required]
      }),
      mothersName: new FormControl(null, {
      }),
      fathersName: new FormControl(null, {
        validators: [Validators.required]
      }),
      user: new FormControl(null, {
        validators: [Validators.required, Validators.email]
      }),
      password: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(8)]
      }),
      position: new FormControl(null, {
        validators: [Validators.required]
      }),
    })
  }


  signUp(): void {
    if (this.form.invalid) return;
    const newUser: CadastroPost = {
      nome: this.form.value.name,
      rg: this.form.value.rg,
      cpf: this.form.value.cpf,
      dataNascimento: this.form.value.dateOfBirth,
      nomeMae: this.form.value.mothersName,
      nomePai: this.form.value.fathersName,
      login: this.form.value.user,
      senha: this.form.value.password,
      funcao: this.form.value.position,
    };
    console.log(newUser);
    this.api.post(newUser).subscribe({
      next: () => {
        this.router.navigate(['login']);
      },
      error: () => {
        this.snackBar.open('Aconteceu um erro, tente novamente mais tarde!', 'Fechar', {
          duration: 5000,
          horizontalPosition: 'center',
          verticalPosition: 'top',
        });
      }
    })
  }

}
