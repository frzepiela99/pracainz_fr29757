import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdytujKontoComponent } from './edytuj-konto.component';

describe('EdytujKontoComponent', () => {
  let component: EdytujKontoComponent;
  let fixture: ComponentFixture<EdytujKontoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdytujKontoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EdytujKontoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
