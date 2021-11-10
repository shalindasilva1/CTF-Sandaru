/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TextFileComponent } from './text-file.component';

describe('TextFileComponent', () => {
  let component: TextFileComponent;
  let fixture: ComponentFixture<TextFileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextFileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
