import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallerScreenComponent } from './caller-screen.component';

describe('CallerScreenComponent', () => {
  let component: CallerScreenComponent;
  let fixture: ComponentFixture<CallerScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallerScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallerScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
