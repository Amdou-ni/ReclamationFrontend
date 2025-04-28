import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StbLoginComponent } from './stb-login.component';

describe('StbLoginComponent', () => {
  let component: StbLoginComponent;
  let fixture: ComponentFixture<StbLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StbLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StbLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
