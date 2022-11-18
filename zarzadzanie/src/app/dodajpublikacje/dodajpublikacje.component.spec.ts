import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DodajpublikacjeComponent } from './dodajpublikacje.component';

describe('DodajpublikacjeComponent', () => {
  let component: DodajpublikacjeComponent;
  let fixture: ComponentFixture<DodajpublikacjeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DodajpublikacjeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DodajpublikacjeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
