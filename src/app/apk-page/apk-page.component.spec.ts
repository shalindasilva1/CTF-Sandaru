/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ApkPageComponent } from './apk-page.component';

describe('ApkPageComponent', () => {
  let component: ApkPageComponent;
  let fixture: ComponentFixture<ApkPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApkPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApkPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
