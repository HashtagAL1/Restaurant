import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-sort-form',
  templateUrl: './sort-form.component.html',
  styleUrls: ['./sort-form.component.css']
})
export class SortFormComponent implements OnInit {

  @Input() meals: any;
  sortForm = new FormGroup({
    criteria: new FormControl('ascending', [Validators.required])
  });

  constructor() { }

  ngOnInit() {
  }

  sort() {
    const criteria = this.sortForm.get('criteria').value;
    if (criteria === 'ascending') {
      this.meals = this.meals.sort((a, b) => a.price - b.price);
      return;
    }
    this.meals = this.meals.sort((a, b) => b.price - a.price);
  }

}
