import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrl: './auth-form.component.css'
})
export class AuthFormComponent {
  enteredToken: string = ''

  constructor(private router: Router) {}
  validateToken(): void {
    //this.validationResult = this.enteredToken == "hello";
    // return this.validationResult;
    if(this.enteredToken == "hello"){
      localStorage.setItem('token', Math.random.toString())
      this.router.navigate(["home"])
    }
  }
}
