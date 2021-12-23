import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpParamsOptions } from '@angular/common/http';

export interface Usuarios {
  id: number,
  nombreCompleto: string,
  username: string,
  email: string,
  password: string
}

export interface UsuarioLogin {
  email: string,
  password: string
}

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  apiUrl: string = "api/login";

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

  loguearUsuario(usuario: any):Observable<UsuarioLogin> {
    return this.http.post<UsuarioLogin>(this.apiUrl, usuario)
    
  }
/**
 * .pipe(
      catchError(this.handleError('Usuario', usuario))
    );
 */

}
