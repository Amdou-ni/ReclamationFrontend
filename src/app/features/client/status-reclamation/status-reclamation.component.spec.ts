import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusReclamationComponent } from './status-reclamation.component';

describe('StatusReclamationComponent', () => {
  let component: StatusReclamationComponent;
  let fixture: ComponentFixture<StatusReclamationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StatusReclamationComponent]
    });
    fixture = TestBed.createComponent(StatusReclamationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
