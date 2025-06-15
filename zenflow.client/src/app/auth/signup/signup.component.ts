import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  username = '';
  password = '';
  error = '';
  success = '';

  constructor(private authService: AuthService) {}

  onSubmit() {
    this.authService.signup(this.username, this.password).subscribe({
      next: () => {
        this.success = 'Account created';
        this.error = '';
      },
      error: (err) => {
        this.error = err.error || 'Signup failed';
        this.success = '';
      }
    });
  }
}
