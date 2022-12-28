import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DodajAutoraComponent } from './dodaj-autora.component';

describe('DodajAutoraComponent', () => {
  let component: DodajAutoraComponent;
  let fixture: ComponentFixture<DodajAutoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DodajAutoraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DodajAutoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
