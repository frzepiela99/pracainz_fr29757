import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dodajplik1Component } from './dodajplik1.component';

describe('Dodajplik1Component', () => {
  let component: Dodajplik1Component;
  let fixture: ComponentFixture<Dodajplik1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Dodajplik1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dodajplik1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
