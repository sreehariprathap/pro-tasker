import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DueSoonComponent } from './due-soon.component';

describe('DueSoonComponent', () => {
  let component: DueSoonComponent;
  let fixture: ComponentFixture<DueSoonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DueSoonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DueSoonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
