import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './componentes/admin/admin.component';
import { LoginComponent } from './componentes/auth/login/login.component';
import { RegistroComponent } from './componentes/auth/registro/registro.component';
import { CarritoComponent } from './componentes/carrito/carrito.component';
import { DetalleComponent } from './componentes/detalle/detalle.component';
import { ListadoComponent } from './componentes/listado/listado.component';
import { Guard1Guard } from './guard/guard1.guard';


const appRoutes: Routes = [
  { path: 'registro', component: RegistroComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full', },
  
  { path: 'home', component: ListadoComponent, canActivate: [Guard1Guard]},
  { path: 'carrito', component: CarritoComponent },
  { path: 'detalle', component: DetalleComponent },
  { path: 'admin', component: AdminComponent }
  

  
]

// children: [{
//   path: 'user/:name',
//   component: User
// }]
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {



}
