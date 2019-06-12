import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeguroGuardarFotoPage } from './seguro-guardar-foto.page';

describe('SeguroGuardarFotoPage', () => {
  let component: SeguroGuardarFotoPage;
  let fixture: ComponentFixture<SeguroGuardarFotoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeguroGuardarFotoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeguroGuardarFotoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
