import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZmienStreszczenieComponent } from './zmien-streszczenie.component';

describe('ZmienStreszczenieComponent', () => {
  let component: ZmienStreszczenieComponent;
  let fixture: ComponentFixture<ZmienStreszczenieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZmienStreszczenieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZmienStreszczenieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
