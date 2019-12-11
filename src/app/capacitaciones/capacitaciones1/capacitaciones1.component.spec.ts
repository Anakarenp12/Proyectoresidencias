import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Capacitaciones1Component } from './capacitaciones1.component';

describe('Capacitaciones1Component', () => {
  let component: Capacitaciones1Component;
  let fixture: ComponentFixture<Capacitaciones1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Capacitaciones1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Capacitaciones1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
