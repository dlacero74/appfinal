import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdFacialPage } from './id-facial.page';

describe('IdFacialPage', () => {
  let component: IdFacialPage;
  let fixture: ComponentFixture<IdFacialPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdFacialPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdFacialPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
