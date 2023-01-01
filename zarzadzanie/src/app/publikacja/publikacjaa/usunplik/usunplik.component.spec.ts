import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsunplikComponent } from './usunplik.component';

describe('UsunplikComponent', () => {
  let component: UsunplikComponent;
  let fixture: ComponentFixture<UsunplikComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsunplikComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsunplikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
