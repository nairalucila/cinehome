import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Usuarios, UsuariosService } from '../../../servicios/usuarios.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit, OnDestroy {

  /**FALTA DESHABILITAR EL BOTON
   * FALTA ARREGLAR EL BOTON DE VISIBILIDAD
   */

  tipoContrasenia: string;

  registroForm = this.fBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    contrasenia: ['', Validators.required],
    nombreUsuario: ['', Validators.required],
    telefono: ['', Validators.required],
    confirmarContrasenia: ['', Validators.required],
  })

  constructor(private fBuilder: FormBuilder, private usuarioService: UsuariosService, private route: Router) {
    this.tipoContrasenia = "password";
  }

  ngOnInit(): void {
    //this.traerUsuarioBaseDato(1);
  }

  cambiarTipoContrasenia(): void {
    this.tipoContrasenia = "text";
  }
  //REGISTAR USUARIOS
  registrarUsuarios(nuevousuario: Usuarios) {
    try {
      console.log("USUARIO ENTRANTE", nuevousuario);
      this.usuarioService.loguearUsuario(nuevousuario).subscribe(data => {
        console.log("[DataRegistro]:", data);
        if (data) {
          this.route.navigate(['/login']);
        }
      })
    } catch (error) {
      console.log("Ups!", error);
      return error;
    }
  };


  //TRAER USUARIOS
  traerUsuarioBaseDato(endpoint: number): void {
    this.usuarioService.traerUsuario(endpoint).subscribe(user => console.log("USE-R->", user))

  }

  onSubmit() {
    if (this.registroForm.value.contrasenia === this.registroForm.value.confirmarContrasenia) {
      delete this.registroForm.value.confirmarContrasenia
      this.registrarUsuarios(this.registroForm.value);
    } else {
      console.log("Las contraseñas no coinciden, verifiquelas")
    }
  }

  ngOnDestroy(): void {
    this.registroForm.value
  }

}
