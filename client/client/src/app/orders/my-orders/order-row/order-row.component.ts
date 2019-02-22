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

  constructor(public router: Router) { }

  ngOnInit() {
  }

  getRowClass() {
    switch (this.order.status) {
      case 'In Progress': return 'bg-yellowCustom customRow text-center font-weight-bold';
      case 'Taken': return 'bg-danger customRow text-center font-weight-bold';
      case 'Delivered': return 'bg-primary customRow text-center font-weight-bold';
      default: return 'bg-secondary customRow text-center font-weight-bold';
    }
  }

}
