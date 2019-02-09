import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs/index";
import {JwtHelperService} from "@auth0/angular-jwt";
import {Router} from "@angular/router";
import {NotifierService} from "angular-notifier";

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  constructor(public http: HttpClient,
              public router: Router,
              public notifier: NotifierService) { }
  helper = new JwtHelperService();

  getDecodedToken() {
    return this.helper.decodeToken(localStorage.getItem('access_token'));
  }

  getUsername(): string {
    return this.getDecodedToken()['username'];
  }

  isAdmin(): boolean {
    return this.isLoggedIn() && this.getDecodedToken().role === 'admin';
  }

  isModerator(): boolean {
    return this.isLoggedIn() && this.getDecodedToken().role === 'moderator';
  }

  isDeliverer(): boolean {
    return this.isLoggedIn() && this.getDecodedToken().role === 'deliverer';
  }

  isLoggedIn() {
    const access_token = localStorage.getItem('access_token');
    if (access_token) {
        return !this.helper.isTokenExpired(access_token);
    }
    return false;
  }

  register(username: string, password: string, email: string): Observable<any> {
    const payload = JSON.stringify({ username, password, email});
    console.log(payload);
    return this.http.post('http://localhost:3333/auth/register', payload, {headers: this.createHeaders()});
  }

  login(username: string, password: string): Observable<any> {
    const payload = JSON.stringify({ username, password });
    return this.http.post('http://localhost:3333/auth/login', payload, {headers: this.createHeaders()});
  }

  logout(): void {
    localStorage.clear();
    this.notifier.notify('success', 'Logout successful');
    this.router.navigate(['/']);
  }

  signIn(data): void {
    localStorage.setItem('access_token', data.access_token);
    localStorage.setItem('cart', '[]');
  }

  createHeaders() {
    return new HttpHeaders({
      'Content-Type': 'application/json'
    });
  }
}
