import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchFormComponent } from './search-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {NgxPaginationModule} from "ngx-pagination";
import {HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";
import {RouterTestingModule} from "@angular/router/testing";
import {NotifierModule} from "angular-notifier";
import {
  NgxNavigationWithDataComponent, NgxNavigationWithDataModule,
  NgxNavigationWithDataService
} from "ngx-navigation-with-data";

describe('SearchFormComponent', () => {
  let component: SearchFormComponent;
  let fixture: ComponentFixture<SearchFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchFormComponent ],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule,
        NotifierModule,
        ReactiveFormsModule,
        FormsModule,
        NgxPaginationModule,
        NgxNavigationWithDataModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
