import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudContentComponent } from './crud-content.component';

describe('CrudContentComponent', () => {
  let component: CrudContentComponent;
  let fixture: ComponentFixture<CrudContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrudContentComponent]
    });
    fixture = TestBed.createComponent(CrudContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
