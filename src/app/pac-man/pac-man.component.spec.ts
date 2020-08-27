import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PacManComponent } from './pac-man.component';

describe('PacManComponent', () => {
  let component: PacManComponent;
  let fixture: ComponentFixture<PacManComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PacManComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PacManComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
