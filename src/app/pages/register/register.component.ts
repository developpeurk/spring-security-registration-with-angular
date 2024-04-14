import { Component } from '@angular/core';
import {RegistrationRequest} from "../../services/models/registration-request";
import {Router} from "@angular/router";
import {AuthenticationService} from "../../services/services/authentication.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  constructor(
    private router: Router,
    private authService: AuthenticationService
  ) {
  }


  registerRequest: RegistrationRequest = { email: '', firstname: '', lastname:'', password: ''}
  errorMsg: Array<string> = []

  login() {
    this.router.navigate(['login'])

  }

  register() {
    this.errorMsg = []
    this.authService.register({
      body: this.registerRequest
    }).subscribe({
      next: () => {
        this.router.navigate(['activate-account'])
      },
      error: (err) => {
        this.errorMsg = err.error.validationErrors;
      }
    })

  }
}
