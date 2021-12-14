import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

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

  constructor(private fBuilder: FormBuilder) {
    this.tipoContrasenia = "password";
  }

  ngOnInit(): void {
  }

  cambiarTipoContrasenia() {
    this.tipoContrasenia = "text";
  }

  onSubmit() {
    console.log(this.registroForm.value)
  }

  ngOnDestroy(): void {
    this.registroForm.value

  }

}
