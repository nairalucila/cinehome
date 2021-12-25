import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import { UsuarioLogin, UsuariosService, Usuarios } from 'src/app/servicios/usuarios.service';
import { Router } from '@angular/router';

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
  estaLogueado: boolean;

  loginForm = this.fBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    contrasenia: ['', Validators.required]
  })

  constructor(private fBuilder: FormBuilder, private usuarioService: UsuariosService, private route: Router) {
    this.tipoContrasenia = "password";
    this.estaLogueado = false;

  }

  ngOnInit(): void {
  }

  verificarUsuarioenBaseDatos(usuarioIngresado: UsuarioLogin) {
    try {
      this.usuarioService.loguearUsuario(usuarioIngresado).subscribe(data => {
        console.log("[Data]:", data);
        if (data) {
          this.estaLogueado = true;
          let saveLS = this.estaLogueado.toString();
          localStorage.setItem("LOG_", saveLS);
          this.route.navigate(['/home']);
        } else {

        }

      })
    } catch (error) {
      console.log("Ups!", error);
      return error;
    }
  };

  verificarUsuarioFront() {

  }

  cambiarTipoContrasenia(event: any) {
    console.log(event)
    this.tipoContrasenia = "text";
  }

  onSubmit() {
    console.log(this.loginForm.value);
    this.verificarUsuarioenBaseDatos(this.loginForm.value);
  }

}
