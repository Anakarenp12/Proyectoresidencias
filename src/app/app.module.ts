import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CedulaComponent } from './cedula/cedula.component';
import { Cedula1Component } from './cedula/cedula1/cedula1.component';
import { MenuprincipalComponent } from './menuprincipal/menuprincipal.component';
import { FichaComponent } from './ficha/ficha.component';
import { RegistroComponent } from './registro/registro.component';
import { SolicitudComponent } from './solicitud/solicitud.component';
import { CapacitacionesComponent } from './capacitaciones/capacitaciones.component';
import { AsesoriasComponent } from './asesorias/asesorias.component';
import { PlanesComponent } from './planes/planes.component';
import { FichatecnicaComponent } from './ficha/fichatecnica/fichatecnica.component';
import { RegistrodeasesoriasComponent } from './registro/registrodeasesorias/registrodeasesorias.component';
import { SolicitudepagoComponent } from './solicitud/solicitudepago/solicitudepago.component';
import { Capacitaciones1Component } from './capacitaciones/capacitaciones1/capacitaciones1.component';
import { Aesorias1Component } from './asesorias/aesorias1/aesorias1.component';
import { PlannegociacionComponent } from './planes/plannegociacion/plannegociacion.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CedulaComponent,
    Cedula1Component,
    MenuprincipalComponent,
    FichaComponent,
    RegistroComponent,
    SolicitudComponent,
    CapacitacionesComponent,
    AsesoriasComponent,
    PlanesComponent,
    FichatecnicaComponent,
    RegistrodeasesoriasComponent,
    SolicitudepagoComponent,
    Capacitaciones1Component,
    Aesorias1Component,
    PlannegociacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
