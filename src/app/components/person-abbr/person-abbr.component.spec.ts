import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonAbbrComponent } from './person-abbr.component';

describe('PersonAbbrComponent', () => {
  let component: PersonAbbrComponent;
  let fixture: ComponentFixture<PersonAbbrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonAbbrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonAbbrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
