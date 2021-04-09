import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrRootComponent } from './hr-root.component';

describe('HrRootComponent', () => {
  let component: HrRootComponent;
  let fixture: ComponentFixture<HrRootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HrRootComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HrRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
