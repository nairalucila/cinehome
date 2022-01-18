import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UsuariosService, Usuarios } from 'src/app/servicios/usuarios.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  value: any = 'Clear me';
  idForDelete = new FormControl('');
  esInputVisible: boolean;
  listaUsuarios: Usuarios[] = [];
  constructor(private usuarioService: UsuariosService, private snackBar: MatSnackBar) {
    this.esInputVisible = false;
  }

  ngOnInit(): void {}

  traerListaUsuarios() {
    this.usuarioService.traerUsuarios2().subscribe((usuarios: Usuarios[]) => {
      this.listaUsuarios = usuarios;
    });
  }

  mostrarInput() {
    this.esInputVisible = true;
  }

  sendValue(id: any) {
    this.esInputVisible = false;
    let idUSuario = Number(id.value);
    
   this.eliminarUsuario(idUSuario);
  }

  eliminarUsuario(id: number){

  this.usuarioService.eliminarUsuario(id).subscribe((res) => {
    this.snackBar.open("Usuario Eliminado con Éxito", "OK", {duration: 1200});
    });
  }
}
