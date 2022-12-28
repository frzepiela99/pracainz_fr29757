import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsunPublikacjeComponent } from './usun-publikacje.component';

describe('UsunPublikacjeComponent', () => {
  let component: UsunPublikacjeComponent;
  let fixture: ComponentFixture<UsunPublikacjeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsunPublikacjeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsunPublikacjeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
