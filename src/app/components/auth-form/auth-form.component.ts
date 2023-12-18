import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { apiEndpoints } from '../../endpoints/api';
import axios from 'axios';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.css']
})
export class AuthFormComponent {
  enteredToken: string = '';

  async validateTokenByRequest(url: string, enteredToken: string): Promise<boolean> {
    const request = {
      "token": enteredToken
    };

    try {
      const response = await axios.post(url, request);
      const valid: boolean = response.data.validated;
      return valid;
    } catch (error) {
      window.alert("An error occurred while validating the token");
      return false;
    }
  }

  constructor(private router: Router) {}

  async validateToken(): Promise<void> {
    const url = apiEndpoints + "/auth";
    if (await this.validateTokenByRequest(url, this.enteredToken)) {
      localStorage.setItem('token', Math.random().toString());
      this.router.navigate(["home"]);
    }
  }
}
