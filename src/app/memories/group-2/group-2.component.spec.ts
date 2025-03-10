import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Group2Component } from './group-2.component';

describe('Group2Component', () => {
  let component: Group2Component;
  let fixture: ComponentFixture<Group2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Group2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Group2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
