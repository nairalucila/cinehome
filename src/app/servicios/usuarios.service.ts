import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpParamsOptions } from '@angular/common/http';

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

  constructor(private http: HttpClient) {
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }

  loguearUsuario(usuario: any) {
    return this.http.post(this.apiUrl, usuario);

  }

  traerUsuario(endpoint: number) {
    let urlConEndpoint = this.apiUrl + `/${endpoint}`;
    return this.http.get(urlConEndpoint);
  }

  registrarUsuario(usuario: Usuarios): Observable<Usuarios> {
    return this.http.post<Usuarios>(this.apiUrl, usuario)
  }

}
