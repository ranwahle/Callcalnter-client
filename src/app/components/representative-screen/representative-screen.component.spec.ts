import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepresentativeScreenComponent } from './representative-screen.component';

describe('RepresentativeScreenComponent', () => {
  let component: RepresentativeScreenComponent;
  let fixture: ComponentFixture<RepresentativeScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepresentativeScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepresentativeScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
