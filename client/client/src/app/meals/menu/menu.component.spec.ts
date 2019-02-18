import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuComponent } from './menu.component';
import {FilterFormComponent} from "./filter-form/filter-form.component";
import {MealListComponent} from "./meal-list/meal-list.component";
import {SearchFormComponent} from "./search-form/search-form.component";
import {SearchResultsComponent} from "./search-results/search-results.component";
import {SortFormComponent} from "./sort-form/sort-form.component";
import {NgxPaginationModule} from "ngx-pagination";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterTestingModule} from "@angular/router/testing";
import {HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";
import {NotifierModule} from "angular-notifier";
import {NgxNavigationWithDataComponent, NgxNavigationWithDataModule} from "ngx-navigation-with-data";

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MenuComponent,
        FilterFormComponent,
        MealListComponent,
        SearchFormComponent,
        SearchResultsComponent,
        SortFormComponent
      ],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule,
        ReactiveFormsModule,
        NgxPaginationModule,
        NotifierModule,
        ReactiveFormsModule,
        FormsModule,
        NgxNavigationWithDataModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
