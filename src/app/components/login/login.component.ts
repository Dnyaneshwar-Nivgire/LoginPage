import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private router: Router) {}

  login() {
    if (this.username ==='atul' && this.password === '123') {
      // Navigate to home
      this.router.navigate(['/home']);
    } else {
      // Set error message for invalid credentials
      this.errorMessage = "Invalid credentials";
      // Optional: Navigate back to login
      this.router.navigate(['/login']);
    }
  }
}
