import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MealListComponent } from './meal-list.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NotifierModule} from "angular-notifier";
import {NgxPaginationModule} from "ngx-pagination";
import {RouterTestingModule} from "@angular/router/testing";
import {HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";
import {SortFormComponent} from "../sort-form/sort-form.component";
import {MenuComponent} from "../menu.component";
import {FilterFormComponent} from "../filter-form/filter-form.component";
import {SearchFormComponent} from "../search-form/search-form.component";
import {NgxNavigationWithDataModule} from "ngx-navigation-with-data";

describe('MealListComponent', () => {
  let testHostComponent: MenuComponent;
  let testHostFixture: ComponentFixture<MenuComponent>;
  let component: MealListComponent;
  let fixture: ComponentFixture<MealListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MealListComponent, MenuComponent, FilterFormComponent, SearchFormComponent, SortFormComponent ],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule,
        ReactiveFormsModule,
        NgxPaginationModule,
        NotifierModule,
        ReactiveFormsModule,
        FormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    testHostFixture = TestBed.createComponent(MenuComponent);
    testHostComponent = testHostFixture.componentInstance;
    testHostComponent.ngOnInit();
    fixture = TestBed.createComponent(MealListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
