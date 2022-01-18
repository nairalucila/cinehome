import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Guard1Guard implements CanActivate {

  constructor(private router: Router){}
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let idUsuarioLogueado = localStorage.getItem('INITIALIZACION_IN');
      if(idUsuarioLogueado !== null || idUsuarioLogueado !== undefined ){
        this.router.navigate(['/home']);
        return false;
      } else {
        return true;
      }
  }
  
}
