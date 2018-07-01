import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectTeeComponent } from './select-tee.component';

describe('SelectTeeComponent', () => {
  let component: SelectTeeComponent;
  let fixture: ComponentFixture<SelectTeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectTeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectTeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
