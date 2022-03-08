import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonIconVerticalComponent } from './button-icon-vertical.component';

describe('ButtonIconVerticalComponent', () => {
  let component: ButtonIconVerticalComponent;
  let fixture: ComponentFixture<ButtonIconVerticalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonIconVerticalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonIconVerticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
