import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecenzentComponent } from './recenzent.component';

describe('RecenzentComponent', () => {
  let component: RecenzentComponent;
  let fixture: ComponentFixture<RecenzentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecenzentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecenzentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
