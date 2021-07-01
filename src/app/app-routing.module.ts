import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CorredorAboutComponent } from './corredor-about/corredor-about.component';
import { CorredorGeneralComponent } from './corredor-general/corredor-general.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'corredores',
    pathMatch: 'full'
  },
  {
    path: 'corredores',
    component: CorredorGeneralComponent
  },
  {
    path: 'about',
    component: CorredorAboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
