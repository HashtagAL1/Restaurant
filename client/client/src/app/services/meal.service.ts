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

  addMeal(data): Observable<any> {
    const payload = JSON.stringify(data);
    return this.http.post('http://localhost:3333/meals/add', payload, {headers: this.auth.createHeaders()});
  }

  editMeal(data): Observable<any> {
    const payload = JSON.stringify(data);
    return this.http.post(`http://localhost:3333/meals/edit/${data._id}`, payload, {headers: this.auth.createHeaders()});
  }

  searchByName(data): Observable<any> {
    const payload = JSON.stringify({data});
    return this.http.post('http://localhost:3333/meals/search', payload, {headers: this.auth.createHeaders()});
  }

  getAllMealsCategory(category): Observable<any> {
    return this.http.get(`http://localhost:3333/meals/category/${category}`);
  }

  getMeal(id): Observable<any> {
    return this.http.get(`http://localhost:3333/meals/singleMeal/${id}`);
  }

  deleteMeal(id): Observable<any> {
    return this.http.post(`http://localhost:3333/meals/delete/${id}`,
      JSON.stringify({}), {headers: this.auth.createHeaders()});
  }

}
