import { Component } from '@angular/core';
import {AuthRequest} from "../../../models/auth-request";
import {UserService} from "../../../services/user.service";
import {Router} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {MatError, MatFormField, MatFormFieldControl, MatFormFieldModule} from "@angular/material/form-field";
import {MatCard, MatCardContent, MatCardTitle} from "@angular/material/card";
import {MatButton} from "@angular/material/button";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    MatError,
    MatCard,
    MatCardTitle,
    MatCardContent,
    MatFormField,
    MatFormFieldModule,
    MatButton,
    NgIf,

  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  authRequest: AuthRequest = new AuthRequest();
  error: string = '';
  isLoading: boolean = false;


  constructor(private userService: UserService, private router: Router) {
  }
  loginForm() {
    this.isLoading = true;
    this.userService.login(this.authRequest).subscribe(data => {
        window.localStorage.setItem("token", data.token);
        this.router.navigate(['/admin'])
      },
      error => {
        this.error = error.type;
        this.isLoading = false;
        console.log(this.error)
      }
    )
  }
}
