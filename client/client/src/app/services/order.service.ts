import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AuthorizationService} from "./authorization.service";
import {Observable} from "rxjs/index";
import * as socketIo from 'socket.io-client';
import {Subject} from "rxjs/Rx";

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  orders: Subject<any>;

  constructor(public http: HttpClient,
              public auth: AuthorizationService) { }

  makeOrder(data): Observable<any> {
    const payload = JSON.stringify(data);
    return this.http.post('http://localhost:3333/orders/add', payload, {headers: this.auth.createHeaders()});
  }

  getUserOrders(): Observable<any> {
    const username = this.auth.getUsername();
    return this.http.get(`http://localhost:3333/orders/myOrders/${username}`);
  }

  getOrder(orderId: string): Observable<any> {
    return this.http.get(`http://localhost:3333/orders/orderDetails/${orderId}`);
  }

  getAllOrders(): Observable<any> {
    return this.http.get('http://localhost:3333/orders/allOrders');
  }

  updateOrderStatus(orderId: string, status: string): Observable<any> {
    const payload = JSON.stringify({status: status, deliverer: this.auth.getUsername()});
    return this.http.post(`http://localhost:3333/orders/update/${orderId}`, payload, {headers: this.auth.createHeaders()});
  }
}
