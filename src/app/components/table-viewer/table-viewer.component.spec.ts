import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableViewerComponent } from './table-viewer.component';

describe('TableViewerComponent', () => {
  let component: TableViewerComponent;
  let fixture: ComponentFixture<TableViewerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableViewerComponent]
    });
    fixture = TestBed.createComponent(TableViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
