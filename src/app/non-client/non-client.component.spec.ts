import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonClientComponent } from './non-client.component';

describe('NonClientComponent', () => {
  let component: NonClientComponent;
  let fixture: ComponentFixture<NonClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NonClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NonClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
