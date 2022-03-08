import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsSegmentComponent } from './tabs-segment.component';

describe('TabsSegmentComponent', () => {
  let component: TabsSegmentComponent;
  let fixture: ComponentFixture<TabsSegmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabsSegmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsSegmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
