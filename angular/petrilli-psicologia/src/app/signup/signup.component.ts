import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  form: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl (null, {
        validators: [Validators.required]
      }),
      rg: new FormControl (null, {
        validators: [Validators.required, Validators.email]
      }),
      cpf: new FormControl (null, {
        validators: [Validators.required, Validators.email]
      }),
      dateOfBirth: new FormControl (null, {
        validators: [Validators.required, Validators.email]
      }),
      mothersName: new FormControl (null, {
        validators: [Validators.required, Validators.email]
      }),
      fathersName: new FormControl (null, {
        validators: [Validators.required, Validators.email]
      }),
      user: new FormControl (null, {
        validators: [Validators.required, Validators.email]
      }),
      password: new FormControl (null, {
        validators: [Validators.required, Validators.minLength(8)]
      }),
      position: new FormControl (null, {
        validators: [Validators.required, Validators.email]
      }),
    })
  }

  placeholderSignUp(){
   if(this.form.invalid) return;
   console.log(this.form.value.name);
   console.log(this.form.value.rg);
   console.log(this.form.value.cpf);
   console.log(this.form.value.dateOfBirth);
   console.log(this.form.value.mothersName);
   console.log(this.form.value.fathersName);
   console.log(this.form.value.user);
   console.log(this.form.value.password);
   console.log(this.form.value.position);
  }

}
