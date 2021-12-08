import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoComponent } from './componentes/listado/listado.component';
import { LoginComponent } from './componentes/login/login.component';
import { HomeComponent } from './vistas/home/home.component';

const appRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'peliculas', component: ListadoComponent},
  {path:'', redirectTo: '/peliculas', pathMatch: 'full'} 
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 



}
