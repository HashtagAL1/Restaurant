import {Component, OnInit} from '@angular/core';
import * as socketIo from 'socket.io-client'
import {Spinkit} from "ng-http-loader";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'app';
  spinkit = Spinkit;

  ngOnInit() {
  }
}
