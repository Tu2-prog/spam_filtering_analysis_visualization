import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './views/details/details.component';
import { HomeComponent } from './views/home/home.component';
import { AuthentificationComponent } from './views/authentification/authentification.component';
import { authGuard } from './guards/auth-guard.guard';

const routes: Routes = [
  {path: 'home', canActivate:[authGuard], component: HomeComponent},
  {path: 'details', component: DetailsComponent},
  {path: 'login', component: AuthentificationComponent},
  {path: '', redirectTo: '/login', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
