import { Component, OnInit } from '@angular/core';
import {AuthorizationService} from "../../services/authorization.service";
import {NotifierService} from "angular-notifier";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(5),
      Validators.maxLength(15)]),
    password: new FormControl('', [Validators.required])
  });

  constructor(public auth: AuthorizationService,
              public notifier: NotifierService,
              public router: Router) { }

  ngOnInit() {
  }

  login() {
    const username = this.loginForm.get('username').value;
    const password = this.loginForm.get('password').value;
    this.auth.login(username, password).subscribe((res) => {
      if (!res.success) {
          this.notifier.notify('warning', res.message);
          return;
      }
      this.auth.signIn(res);
      this.notifier.notify('success', res.message);
      this.router.navigate(['/menu']);
    })
  }

}
