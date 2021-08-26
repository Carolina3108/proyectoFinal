import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RestaurantesModule } from './modulos/restaurantes.module';
import { PrincipalComponent } from './principal/principal.component';
import { OpinionesComponent } from './opinionesR/opiniones/opiniones.component';
import { CrearOpinionComponent } from './opinionesR/crear-opinion/crear-opinion.component';
import { CrearRestauranteComponent } from './restaurantes/crear-restaurante/crear-restaurante.component';


@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    OpinionesComponent,
    CrearOpinionComponent,
    CrearRestauranteComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RestaurantesModule,
    HttpClientModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
