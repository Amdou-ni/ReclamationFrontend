import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitReclamationComponent } from './submit-reclamation.component';

describe('SubmitReclamationComponent', () => {
  let component: SubmitReclamationComponent;
  let fixture: ComponentFixture<SubmitReclamationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmitReclamationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitReclamationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
