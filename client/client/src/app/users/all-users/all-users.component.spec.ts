import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllUsersComponent } from './all-users.component';
import {NgxPaginationModule} from "ngx-pagination";
import {RouterTestingModule} from "@angular/router/testing";
import {HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";
import {UserRowComponent} from "./user-row/user-row.component";
import {NotifierModule} from "angular-notifier";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

describe('AllUsersComponent', () => {
  let component: AllUsersComponent;
  let fixture: ComponentFixture<AllUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllUsersComponent, UserRowComponent ],
      imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
        RouterTestingModule,
        NgxPaginationModule,
        NotifierModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
