import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartingTodayComponent } from './starting-today.component';

describe('StartingTodayComponent', () => {
  let component: StartingTodayComponent;
  let fixture: ComponentFixture<StartingTodayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartingTodayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StartingTodayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
