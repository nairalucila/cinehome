import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import {catchError} from 'rxjs/operators'

@Injectable({
  providedIn: 'root',
})
export class HeaderInterceptorService implements HttpInterceptor {
  token: string;
  constructor(private cookieService: CookieService) {
    this.token = this.cookieService.get('token');
  }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    if (req.url.includes('api.themoviedb')) {
      return next.handle(req).pipe(
        catchError(this.manejarError)
      );
    }


    const headers = new HttpHeaders({
      'authorization': this.token,
    });

    const reqClone = req.clone({
      headers
    });

    return next.handle(reqClone).pipe(
      catchError(this.manejarError)
    );
  }

  manejarError(error: HttpErrorResponse){
    console.log('[ERROR]:', error);
    return throwError("Error en Interceptor")

  }
}

