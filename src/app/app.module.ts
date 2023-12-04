import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpamClassifierComponent } from './components/spam-classifier/spam-classifier.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { DetailsComponent } from './views/details/details.component';
import { HomeComponent } from './views/home/home.component';
import { AuthentificationComponent } from './views/authentification/authentification.component';
import { AuthFormComponent } from './components/auth-form/auth-form.component';
@NgModule({
  declarations: [
    AppComponent,
    SpamClassifierComponent,
    NavbarComponent,
    FooterComponent,
    DetailsComponent,
    HomeComponent,
    AuthentificationComponent,
    AuthFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
