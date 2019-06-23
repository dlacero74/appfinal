import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Camara2Page } from './camara2.page';

describe('Camara2Page', () => {
  let component: Camara2Page;
  let fixture: ComponentFixture<Camara2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Camara2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Camara2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
