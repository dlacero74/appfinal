import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardarFotoPage } from './guardar-foto.page';

describe('GuardarFotoPage', () => {
  let component: GuardarFotoPage;
  let fixture: ComponentFixture<GuardarFotoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuardarFotoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuardarFotoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
