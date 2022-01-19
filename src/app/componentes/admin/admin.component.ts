import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UsuariosService } from 'src/app/servicios/usuarios.service';
import {Usuarios} from '../../models/usuarios'

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
  constructor(
    private usuarioService: UsuariosService,
    private snackBar: MatSnackBar
  ) {
    this.esInputVisible = false;
  }

  ngOnInit(): void {}

  traerListaUsuarios() {
    this.usuarioService.traerUsuarios().subscribe((usuarios: Usuarios[]) => {
      console.log(usuarios);
      this.listaUsuarios = usuarios;

      for (let i = 0; i < usuarios.length; i++) {
        
      this.listaUsuarios[i]._id = usuarios[i]._id;
        
      }


    });
  }

  mostrarInput() {
    this.esInputVisible = true;
  }

  sendValue(id: any) {
    this.esInputVisible = false;
    
    let idValor = id.value;
    this.eliminarUsuario(idValor);
  }

  eliminarUsuario(id: string) {
    this.usuarioService.eliminarUsuario(id).subscribe((res) => {
      
      this.snackBar.open('Usuario Eliminado con Éxito', 'OK', {
        duration: 1200,
      });
    });
  }
}
