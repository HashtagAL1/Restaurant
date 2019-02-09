import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {NgxNavigationWithDataComponent} from "ngx-navigation-with-data";

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

  results: any;
  title: string;

  constructor(public navCtrl: NgxNavigationWithDataComponent) { }

  ngOnInit() {
    this.results = this.navCtrl.get('data');
    this.title = this.navCtrl.get('title');
  }

}
