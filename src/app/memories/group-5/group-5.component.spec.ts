import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Group5Component } from './group-5.component';

describe('Group5Component', () => {
  let component: Group5Component;
  let fixture: ComponentFixture<Group5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Group5Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Group5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
