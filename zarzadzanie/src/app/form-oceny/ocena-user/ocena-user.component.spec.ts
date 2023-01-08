import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OcenaUserComponent } from './ocena-user.component';

describe('OcenaUserComponent', () => {
  let component: OcenaUserComponent;
  let fixture: ComponentFixture<OcenaUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OcenaUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OcenaUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
