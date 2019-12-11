import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MenuprincipalComponent } from './menuprincipal/menuprincipal.component';
import { CedulaComponent } from './cedula/cedula.component';
import { FichaComponent } from './ficha/ficha.component';
import { RegistroComponent } from './registro/registro.component';
import { SolicitudComponent } from './solicitud/solicitud.component';
import { CapacitacionesComponent } from './capacitaciones/capacitaciones.component';
import { AsesoriasComponent } from './asesorias/asesorias.component';
import { PlanesComponent } from './planes/planes.component';

const routes: Routes = [
  { path :'',redirectTo:'/cedula',pathMatch:'full'},
  { path :'login', component:LoginComponent},
  { path :'menu', component:MenuprincipalComponent},
  { path :'cedula', component:CedulaComponent},
  { path :'ficha' , component:FichaComponent},
  { path :'registro' , component:RegistroComponent},
  { path :'solicitud' , component:SolicitudComponent},
  { path :'capacitaciones' , component:CapacitacionesComponent},
  { path :'asesorias' , component:AsesoriasComponent},
  { path :'planes' , component:PlanesComponent},
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
