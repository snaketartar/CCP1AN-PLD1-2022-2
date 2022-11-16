import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitialNavComponent } from './initial-nav.component';

describe('InitialNavComponent', () => {
  let component: InitialNavComponent;
  let fixture: ComponentFixture<InitialNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InitialNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InitialNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
