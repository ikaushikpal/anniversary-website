import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Group6Component } from './group-6.component';

describe('Group6Component', () => {
  let component: Group6Component;
  let fixture: ComponentFixture<Group6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Group6Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Group6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
