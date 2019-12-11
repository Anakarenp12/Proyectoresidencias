import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlannegociacionComponent } from './plannegociacion.component';

describe('PlannegociacionComponent', () => {
  let component: PlannegociacionComponent;
  let fixture: ComponentFixture<PlannegociacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlannegociacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlannegociacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
