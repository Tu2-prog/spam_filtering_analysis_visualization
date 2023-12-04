import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './views/details/details.component';
import { HomeComponent } from './views/home/home.component';
import { AuthentificationComponent } from './views/authentification/authentification.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'details', component: DetailsComponent},
  {path: 'login', component: AuthentificationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
