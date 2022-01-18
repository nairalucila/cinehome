import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
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
  constructor(private usuarioService: UsuariosService) {
    this.esInputVisible = false;
  }

  ngOnInit(): void {}

  traerListaUsuarios() {
    this.usuarioService
      .traerUsuarios2()
      .subscribe((usuarios: Usuarios[]) => {
        this.listaUsuarios = usuarios;
        console.log(this.listaUsuarios);
      })
  }

  mostrarInput(){
this.esInputVisible = true;
  }

  sendValue(id: any) {
    this.esInputVisible = false;
    console.log(id.value);
    //traer servicio, ver de convertir a num o nose y pasar al serv para q elimine,
  }
}
