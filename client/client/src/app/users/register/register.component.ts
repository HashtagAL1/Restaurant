import { Component, OnInit, OnDestroy } from '@angular/core';
import {AuthorizationService} from "../../services/authorization.service";
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {NotifierService} from "angular-notifier";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public auth: AuthorizationService,
              public router: Router,
              public notifierService: NotifierService) { }

  registerForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(5),
      Validators.maxLength(15)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(5),
      Validators.maxLength(20)]),
    confirmPassword: new FormControl('', [Validators.required])
  });

  ngOnInit() {
  }

  register() {
    const username = this.registerForm.get('username').value;
    const password = this.registerForm.get('password').value;
    const confirmPassword = this.registerForm.get('confirmPassword').value;
    const email = this.registerForm.get('email').value;
    if (password !== confirmPassword) {
        this.error = 'Passwords do not match!';
        return;
    }
    this.auth.register(username, password, email).subscribe((res) => {
      if (!res.success) {
          this.notifierService.notify('warning', res.message);
          return;
      }
      this.auth.signIn(res);
      this.notifierService.notify('success', res.message);
      this.router.navigate(['/']);
    })
  }

}
