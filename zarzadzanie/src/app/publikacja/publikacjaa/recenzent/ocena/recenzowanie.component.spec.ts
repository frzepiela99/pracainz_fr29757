import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecenzowanieComponent } from './recenzowanie.component';

describe('RecenzowanieComponent', () => {
  let component: RecenzowanieComponent;
  let fixture: ComponentFixture<RecenzowanieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecenzowanieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecenzowanieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
