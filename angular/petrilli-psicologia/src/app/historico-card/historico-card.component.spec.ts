import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricoCardComponent } from './historico-card.component';

describe('HistoricoCardComponent', () => {
  let component: HistoricoCardComponent;
  let fixture: ComponentFixture<HistoricoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoricoCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoricoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
