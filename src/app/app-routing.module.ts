import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { TecnicoListComponent } from './components/tecnico/tecnico-list/tecnico-list.component';




const routes: Routes = [
  {

    // Rota para NAV
    path:'', component: NavComponent,
    
    // ROTA para filhos
    children:[
      
      {path:'home', component: HomeComponent},
      {path:'tecnicos', component: TecnicoListComponent}

    ]
    
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
