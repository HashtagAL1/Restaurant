import { Component, OnInit } from '@angular/core';
import {AuthorizationService} from "../../services/authorization.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public auth: AuthorizationService) { }

  ngOnInit() {
  }

}
