import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { identifierModuleUrl } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

export interface Usuarios {
  id: 1,
  nombreUsuario: string,
  email: string,
  contrasenia: string,
  telefono: string
}

export interface UsuarioLogin {
  id: 1,
  email: string,
  contrasenia: string
}

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  apiUrl: string = "https://61c5170cc003e70017b795a8.mockapi.io/users";
  apiUrlBack: string = "http://localhost:3000/";

  constructor(private http: HttpClient) {
  }


  loguearUsuario(usuario: any) {
    let loginApi = this.apiUrlBack + "login";
    return this.http.post(loginApi, usuario);
  }
  
  loguearUsuario2(emailUsuario: string){
    let urlConEndpoint = this.apiUrl + '?email=' + emailUsuario;
    return this.http.get<Usuarios[]>(urlConEndpoint);
  }

  traerUsuario(endpoint: number) {
    let urlConEndpoint = this.apiUrl + `/${endpoint}`;
    return this.http.get(urlConEndpoint);
  }

  traerUsuarios2() {
    let apiGetsUsuario = this.apiUrlBack + "api/usuarios";
    return this.http.get<Usuarios[]>(apiGetsUsuario);
  }

  traerUsuarios() {
    return this.http.get(this.apiUrl);
  }

  registrarUsuario(usuario: Usuarios): Observable<Usuarios> {
    return this.http.post<Usuarios>(this.apiUrl, usuario)
  }

  eliminarUsuario(id: number){
    let apiEliminar = this.apiUrlBack + 'api/usuarios/' + id;
    return this.http.delete(apiEliminar);
  }

}
