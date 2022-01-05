import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import {
  UsuarioLogin,
  UsuariosService,
} from 'src/app/servicios/usuarios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  tipoContrasenia: string;
  estaLogueado: boolean;
  loginForm = this.fBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    contrasenia: ['', Validators.required],
  });

  constructor(
    private fBuilder: FormBuilder,
    private usuarioService: UsuariosService,
    private route: Router,
    private _snackBar: MatSnackBar
  ) {
    this.tipoContrasenia = 'password';
    this.estaLogueado = false;
  }

  ngOnInit(): void {}

  verificarUsuarioenBaseDatos(usuarioIngresado: UsuarioLogin) {
    this.usuarioService
      .loguearUsuario2(usuarioIngresado.email)
      .subscribe((usuario) => {
        if (usuario[0]) {
          if (usuarioIngresado.email === usuario[0].email) {
            this.estaLogueado = true;
            let saveLS = this.estaLogueado.toString();
            localStorage.setItem('LOG_', saveLS);
            localStorage.setItem('INITIALIZACION_IN', usuario[0].id.toString());
            this.route.navigate(['/home']);
          }
        } else {
          this._snackBar.open('Porfavor regístrese', 'Error', {
            duration: 2000,
          });
          this.route.navigate(['/registro']);
        }
      });
  }

  cambiarTipoContrasenia(event: any) {
    this.tipoContrasenia = 'text';
  }

  onSubmit() {
    this.verificarUsuarioenBaseDatos(this.loginForm.value);
  }
}
