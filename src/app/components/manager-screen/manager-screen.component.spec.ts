import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerScreenComponent } from './manager-screen.component';

describe('ManagerScreenComponent', () => {
  let component: ManagerScreenComponent;
  let fixture: ComponentFixture<ManagerScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
