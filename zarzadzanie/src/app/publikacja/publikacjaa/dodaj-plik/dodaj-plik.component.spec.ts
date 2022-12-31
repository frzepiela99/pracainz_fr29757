import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DodajPlikComponent } from './dodaj-plik.component';

describe('DodajPlikComponent', () => {
  let component: DodajPlikComponent;
  let fixture: ComponentFixture<DodajPlikComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DodajPlikComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DodajPlikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
