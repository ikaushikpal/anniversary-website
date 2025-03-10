import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Group7Component } from './group-7.component';

describe('Group7Component', () => {
  let component: Group7Component;
  let fixture: ComponentFixture<Group7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Group7Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Group7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
