import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(public router: Router) { }

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

  placeholderLogin(){
   if(this.form.invalid) return;
   console.log(this.form.value.user);
   console.log(this.form.value.password);
   //navigation link.
  this.router.navigate(['loggedHome']);
  }

}
