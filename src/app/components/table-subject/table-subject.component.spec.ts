import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableSubjectComponent } from './table-subject.component';

describe('TableSubjectComponent', () => {
  let component: TableSubjectComponent;
  let fixture: ComponentFixture<TableSubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableSubjectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
