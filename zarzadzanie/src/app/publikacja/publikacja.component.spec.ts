import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublikacjaComponent } from './publikacja.component';

describe('PublikacjaComponent', () => {
  let component: PublikacjaComponent;
  let fixture: ComponentFixture<PublikacjaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublikacjaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublikacjaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
