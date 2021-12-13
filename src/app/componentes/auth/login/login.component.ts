import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  /**FALTA DESHABILITAR EL BOTON
   * FALTA ARREGLAR EL BOTON DE VISIBILIDAD
   */

  tipoContrasenia: string;
 
  loginForm = this.fBuilder.group({
    email: ['', [ Validators.required, Validators.email]],
    contrasenia: ['', Validators.required]
  })


  constructor(private fBuilder: FormBuilder) {
    this.tipoContrasenia = "password";

  }

  ngOnInit(): void {
  }

  cambiarTipoContrasenia(event: any) {
    console.log(event)
    this.tipoContrasenia = "text";
  }

  onSubmit(){
    console.log(this.loginForm.value);
  }

}
