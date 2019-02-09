import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/index";
import {AuthorizationService} from "./authorization.service";

@Injectable({
  providedIn: 'root'
})
export class MealService {

  constructor(public http: HttpClient,
              public auth: AuthorizationService) { }

  getAllMeals(): Observable<any> {
    return this.http.get('http://localhost:3333/meals/allMeals');
  }

  addMeal(data) {
    const payload = JSON.stringify(data);
    return this.http.post('http://localhost:3333/meals/add', payload, {headers: this.auth.createHeaders()});
  }

}
