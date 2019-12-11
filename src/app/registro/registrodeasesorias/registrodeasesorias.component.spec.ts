import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrodeasesoriasComponent } from './registrodeasesorias.component';

describe('RegistrodeasesoriasComponent', () => {
  let component: RegistrodeasesoriasComponent;
  let fixture: ComponentFixture<RegistrodeasesoriasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrodeasesoriasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrodeasesoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
