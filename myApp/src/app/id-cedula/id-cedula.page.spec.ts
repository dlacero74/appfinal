import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdCedulaPage } from './id-cedula.page';

describe('IdCedulaPage', () => {
  let component: IdCedulaPage;
  let fixture: ComponentFixture<IdCedulaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdCedulaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdCedulaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
