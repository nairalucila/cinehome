import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { UsuarioLogin, Usuarios}from '../../../models/usuarios';
import { UsuariosService } from 'src/app/servicios/usuarios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  estaLogueado: boolean;
  loginForm = this.fBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    contrasenia: ['', Validators.required],
  });

  show: boolean;

  constructor(
    private fBuilder: FormBuilder,
    private usuarioService: UsuariosService,
    private route: Router,
    private _snackBar: MatSnackBar,
    private cookie: CookieService
  ) {
    this.estaLogueado = false;
    this.show = false;
  }

  ngOnInit(): void {}

  verificarUsuarioenBaseDatos2(usuarioIngresado: UsuarioLogin) {
    this.usuarioService
      .loguearUsuario(usuarioIngresado)
      .subscribe((usuario: any) => {
        if (usuario) {
          this.cookie.set('token', usuario.token);
          localStorage.setItem('INITIALIZACION_IN', usuario._id);
          this.estaLogueado = true;
          let saveLS = this.estaLogueado.toString();
          localStorage.setItem('LOG_', saveLS);
          this.route.navigate(['/home']);
        } else {
          this._snackBar.open('Porfavor regístrese', 'Error', {
            duration: 2000,
          });
          this.route.navigate(['/registro']);
        }
      });
  }

  verificarUsuarioenBaseDatos(usuarioIngresado: UsuarioLogin) {
    this.usuarioService
      .loguearUsuario(usuarioIngresado.email)
      .subscribe((usuario: any) => {
        console.log(usuario);
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

  cambiarTipoContrasenia() {
    this.show = !this.show;
  }

  onSubmit() {
    this.verificarUsuarioenBaseDatos2(this.loginForm.value);
  }
}
