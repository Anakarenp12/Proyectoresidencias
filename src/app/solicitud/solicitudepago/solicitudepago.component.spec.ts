import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudepagoComponent } from './solicitudepago.component';

describe('SolicitudepagoComponent', () => {
  let component: SolicitudepagoComponent;
  let fixture: ComponentFixture<SolicitudepagoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolicitudepagoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitudepagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
