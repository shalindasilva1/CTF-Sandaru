/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ZipFilePageComponent } from './zip-file-page.component';

describe('ZipFilePageComponent', () => {
  let component: ZipFilePageComponent;
  let fixture: ComponentFixture<ZipFilePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZipFilePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZipFilePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
