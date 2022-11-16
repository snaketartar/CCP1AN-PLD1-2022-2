import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginApiService } from '../services/login-api.service';
import { UserPost } from '../services/user-post';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(private router: Router, private api: LoginApiService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      user: new FormControl (null, {
        validators: [Validators.required, Validators.email]
      }),
      password: new FormControl (null, {
        validators: [Validators.required, Validators.minLength(8)]
      }),
    })
  }

  doLogin(): void {
   if(this.form.invalid) return;
   const userPost: UserPost = {
    login: this.form.value.user,
    senha: this.form.value.password
   };
   this.api.post(userPost).subscribe({
    next: () => {
      this.router.navigate(['loggedHome']);
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
