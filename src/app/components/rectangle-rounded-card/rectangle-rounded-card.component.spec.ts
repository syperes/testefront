import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RectangleRoundedCardComponent } from './rectangle-rounded-card.component';

describe('RectangleRoundedCardComponent', () => {
  let component: RectangleRoundedCardComponent;
  let fixture: ComponentFixture<RectangleRoundedCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RectangleRoundedCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RectangleRoundedCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
