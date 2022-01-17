import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap, ActivatedRouteSnapshot, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  mostrarNav: boolean;
  currentRoute: string = "";
  constructor(private route: Router) {
    this.mostrarNav = true;
  }

  ngOnInit(): void {
    this.ocultarBarraNavegacion();

    
  }

  ocultarBarraNavegacion(){
    // this.route.config.forEach(rutas => {
    //   if(rutas.path === "login" || rutas.path === "registro"){
    //     this.mostrarNav = false;
    //   }
    // });
  };
}
