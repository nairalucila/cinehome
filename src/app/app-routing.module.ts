import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './componentes/admin/admin.component';
import { LoginComponent } from './componentes/auth/login/login.component';
import { RegistroComponent } from './componentes/auth/registro/registro.component';
import { CarritoComponent } from './componentes/carrito/carrito.component';
import { DetalleComponent } from './componentes/detalle/detalle.component';
import { ListadoComponent } from './componentes/listado/listado.component';
import { AdminGuard } from './guard/admin.guard';
import { Guard1Guard } from './guard/guard1.guard';



const appRoutes: Routes = [
  { path: 'registro', component: RegistroComponent },
  { path: 'login', component: LoginComponent },
  
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  
  { path: 'home', component: ListadoComponent},
  
  { path: 'carrito', component: CarritoComponent, canActivate: [Guard1Guard]},
  
  { path: 'detalle', component: DetalleComponent },
  { path: 'admin', component: AdminComponent , canActivate: [AdminGuard]}
    
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
