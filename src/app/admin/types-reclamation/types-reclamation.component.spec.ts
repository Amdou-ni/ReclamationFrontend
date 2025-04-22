import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypesReclamationComponent } from './types-reclamation.component';

describe('TypesReclamationComponent', () => {
  let component: TypesReclamationComponent;
  let fixture: ComponentFixture<TypesReclamationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypesReclamationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypesReclamationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
