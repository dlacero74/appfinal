import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExitoDenunciaPage } from './exito-denuncia.page';

describe('ExitoDenunciaPage', () => {
  let component: ExitoDenunciaPage;
  let fixture: ComponentFixture<ExitoDenunciaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExitoDenunciaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExitoDenunciaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
