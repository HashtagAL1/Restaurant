import { Injectable } from '@angular/core';
import {Observable} from "rxjs/index";
import {AuthorizationService} from "./authorization.service";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public auth: AuthorizationService,
              public http: HttpClient) { }


  getAllUsers(): Observable<any> {
    return this.http.get('http://localhost:3333/users/all');
  }

  updateUser(userId: string, role: string): Observable<any> {
    const payload = JSON.stringify({role});
    console.log(payload);
    return this.http.post(`http://localhost:3333/users/update/${userId}`, payload, {headers:this.auth.createHeaders()});
  }

}
