import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThanksgivingComponent } from './thanksgiving.component';

describe('ThanksgivingComponent', () => {
  let component: ThanksgivingComponent;
  let fixture: ComponentFixture<ThanksgivingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThanksgivingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThanksgivingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
