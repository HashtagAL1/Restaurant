import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent implements OnInit {

  @Input() cart: any;
  @Input() totalPrice: any;
  orderForm = new FormGroup({
    customerName: new FormControl('', [Validators.required]),
    pickup: new FormControl('', [Validators.required]),
    customerAddress: new FormControl('', [Validators.required])
  });

  constructor() { }

  ngOnInit() {
  }

}
