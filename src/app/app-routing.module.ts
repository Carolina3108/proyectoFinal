import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { OpinionesComponent } from './opinionesR/opiniones/opiniones.component';
import { CrearOpinionComponent } from './opinionesR/crear-opinion/crear-opinion.component';
import { CrearRestauranteComponent } from './restaurantes/crear-restaurante/crear-restaurante.component';

const routes: Routes = [
  {path: 'list-restaurantes', component: PrincipalComponent},
  {path: 'list-opiniones', component: OpinionesComponent},
  {path: 'crear-opinion', component: CrearOpinionComponent},
  {path: 'crear-restaurante', component: CrearRestauranteComponent},
  {path:'', redirectTo: 'list-restaurantes', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
