import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormControlName, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  
  loginForm = this.fb.group({
    email: [''],
    contrasenia: [''],
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log("enviado")
  }

}
