import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componentes/auth/login/login.component';
import { RegistroComponent } from './componentes/auth/registro/registro.component';
import { CarritoComponent } from './componentes/carrito/carrito.component';
import { ListadoComponent } from './componentes/listado/listado.component';


const appRoutes: Routes = [

  { path: 'peliculas', component: ListadoComponent},
  { path: '', redirectTo: 'peliculas', pathMatch: 'full'},
  
  { path: 'carrito', component: CarritoComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },

  
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
