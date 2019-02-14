import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {OrderService} from "../../../services/order.service";

@Component({
  selector: 'app-order-row',
  templateUrl: './order-row.component.html',
  styleUrls: ['./order-row.component.css']
})
export class OrderRowComponent implements OnInit {

  @Input() order: any;

  constructor(public router: Router,
              public orderService: OrderService) { }

  ngOnInit() {
  }

}
