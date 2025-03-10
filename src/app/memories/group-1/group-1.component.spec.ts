import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Group1Component } from './group-1.component';

describe('Group1Component', () => {
  let component: Group1Component;
  let fixture: ComponentFixture<Group1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Group1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Group1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
