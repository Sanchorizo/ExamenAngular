import { Component } from '@angular/core';
import {Router, RouterLink} from "@angular/router";
import {NgIf} from "@angular/common";
import {UserService} from "../../../services/user.service";

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [
    RouterLink,
    NgIf
  ],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  token = localStorage.getItem('token')

  constructor(private userService: UserService, private router: Router) {
  }
  logout(){
    this.userService.clearToken()
    this.router.navigate(['/login'])
  }
}
