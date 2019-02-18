import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MealDetailsComponent } from './meal-details.component';
import {NgxPaginationModule} from "ngx-pagination";
import {ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";
import {RouterTestingModule} from "@angular/router/testing";
import {NotifierModule} from "angular-notifier";
import {MealService} from "../../services/meal.service";
import {MockMealServiceService} from "../../services/mock-meal-service.service";

describe('MealDetailsComponent', () => {
  let component: MealDetailsComponent;
  let fixture: ComponentFixture<MealDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MealDetailsComponent ],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule,
        ReactiveFormsModule,
        NgxPaginationModule,
        NotifierModule
      ],
      providers: [
        {provide: MealService, useClass: MockMealServiceService}
      ]
    })
    .compileComponents().then(() => {
      fixture = TestBed.createComponent(MealDetailsComponent);
      component = fixture.componentInstance;
    })
  }));

  /*beforeEach(() => {
    fixture = TestBed.createComponent(MealDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });*/

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
