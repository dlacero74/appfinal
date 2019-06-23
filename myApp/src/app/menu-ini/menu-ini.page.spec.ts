import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuIniPage } from './menu-ini.page';

describe('MenuIniPage', () => {
  let component: MenuIniPage;
  let fixture: ComponentFixture<MenuIniPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuIniPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuIniPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
