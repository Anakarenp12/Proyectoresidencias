import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Aesorias1Component } from './aesorias1.component';

describe('Aesorias1Component', () => {
  let component: Aesorias1Component;
  let fixture: ComponentFixture<Aesorias1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Aesorias1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Aesorias1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
