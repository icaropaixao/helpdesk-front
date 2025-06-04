import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';




const routes: Routes = [
  {

    // Rota para NAV
    path:'', component: NavComponent,
    
    // ROTA para HOME dentro de NAV
    children:[{path:'home', component: HomeComponent}]

    
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
