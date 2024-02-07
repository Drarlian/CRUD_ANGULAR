import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttAreaComponent } from './att-area.component';

describe('AttAreaComponent', () => {
  let component: AttAreaComponent;
  let fixture: ComponentFixture<AttAreaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AttAreaComponent]
    });
    fixture = TestBed.createComponent(AttAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
