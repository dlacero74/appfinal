import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CamaraInicioPage } from './camara-inicio.page';

describe('CamaraInicioPage', () => {
  let component: CamaraInicioPage;
  let fixture: ComponentFixture<CamaraInicioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CamaraInicioPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CamaraInicioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
