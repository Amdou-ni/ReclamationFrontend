import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuiviReclamationComponent } from './suivi-reclamation.component';

describe('SuiviReclamationComponent', () => {
  let component: SuiviReclamationComponent;
  let fixture: ComponentFixture<SuiviReclamationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuiviReclamationComponent]
    });
    fixture = TestBed.createComponent(SuiviReclamationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
