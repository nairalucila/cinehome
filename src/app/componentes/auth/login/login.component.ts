import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import { UsuariosService } from 'src/app/servicios/usuarios.service';
import { Usuarios } from "src/app/servicios/usuarios.service";

/**FALTA DESHABILITAR EL BOTON
 * FALTA ARREGLAR EL BOTON DE VISIBILIDAD
 */
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  tipoContrasenia: string;

  loginForm = this.fBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    contrasenia: ['', Validators.required]
  })

  constructor(private fBuilder: FormBuilder, private usuarioService: UsuariosService) {
    this.tipoContrasenia = "password";


  }

  ngOnInit(): void {
    this.verificarUsuario();
  }
/**
 * LISTA USUARIO TODOS LOS USUARIOS EN BD
 * LOS RECORRO Y FILTRO POR EMAIL
 * 
 */
  verificarUsuario() {

  }

  cambiarTipoContrasenia(event: any) {
    console.log(event)
    this.tipoContrasenia = "text";
  }

  onSubmit() {
    console.log(this.loginForm.value);
  }

}
