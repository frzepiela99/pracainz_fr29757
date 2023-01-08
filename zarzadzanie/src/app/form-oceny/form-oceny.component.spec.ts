import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormOcenyComponent } from './form-oceny.component';

describe('FormOcenyComponent', () => {
  let component: FormOcenyComponent;
  let fixture: ComponentFixture<FormOcenyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormOcenyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormOcenyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
