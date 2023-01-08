import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WyszukiwarkaComponent } from './wyszukiwarka.component';

describe('WyszukiwarkaComponent', () => {
  let component: WyszukiwarkaComponent;
  let fixture: ComponentFixture<WyszukiwarkaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WyszukiwarkaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WyszukiwarkaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
