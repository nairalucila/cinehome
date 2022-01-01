import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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
    private route: Router
  ) {
    this.tipoContrasenia = 'password';
    this.estaLogueado = false;
  }

  ngOnInit(): void {}

  traerRegistroUsuarios(usuarioEntrante: any) {
    this.usuarioService.traerUsuarios().subscribe((usuariosDB: any) => {
      usuariosDB.forEach((element: any) => {
        if (usuarioEntrante.email !== element.email) {
          return false;
        } else {
          return true;
        }
      });
    });
  }

  verificarUsuarioenBaseDatos(usuarioIngresado: UsuarioLogin) {
    try {
      this.usuarioService.loguearUsuario(usuarioIngresado).subscribe((data: any) => {
        console.log(data);
        let id = data.id;
        this.traerRegistroUsuarios(data);
        

        this.estaLogueado = true;
        let saveLS = this.estaLogueado.toString();
        localStorage.setItem('LOG_', saveLS);
        localStorage.setItem('INITIALIZACION_IN', id);
        this.route.navigate(['/home']);
      });
    } catch (error) {
      console.log('Ups!', error);
      return error;
    }
  }

  verificarUsuarioFront() {}

  cambiarTipoContrasenia(event: any) {
    this.tipoContrasenia = 'text';
  }

  onSubmit() {
    this.verificarUsuarioenBaseDatos(this.loginForm.value);
  }
}
