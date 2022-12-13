import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublikacjaaComponent } from './publikacjaa.component';

describe('PublikacjaaComponent', () => {
  let component: PublikacjaaComponent;
  let fixture: ComponentFixture<PublikacjaaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublikacjaaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublikacjaaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
