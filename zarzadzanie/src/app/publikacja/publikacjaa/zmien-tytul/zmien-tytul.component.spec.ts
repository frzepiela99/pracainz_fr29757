import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZmienTytulComponent } from './zmien-tytul.component';

describe('ZmienTytulComponent', () => {
  let component: ZmienTytulComponent;
  let fixture: ComponentFixture<ZmienTytulComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZmienTytulComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZmienTytulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
