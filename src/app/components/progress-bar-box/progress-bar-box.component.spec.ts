import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressBarBoxComponent } from './progress-bar-box.component';

describe('ProgressBarBoxComponent', () => {
  let component: ProgressBarBoxComponent;
  let fixture: ComponentFixture<ProgressBarBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgressBarBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressBarBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
