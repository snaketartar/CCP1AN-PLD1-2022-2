import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggedHomePageComponent } from './logged-home-page.component';

describe('LoggedHomePageComponent', () => {
  let component: LoggedHomePageComponent;
  let fixture: ComponentFixture<LoggedHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoggedHomePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoggedHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
