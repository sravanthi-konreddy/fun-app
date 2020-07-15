import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NqueensComponent } from './nqueens.component';

describe('NqueensComponent', () => {
  let component: NqueensComponent;
  let fixture: ComponentFixture<NqueensComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NqueensComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NqueensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
