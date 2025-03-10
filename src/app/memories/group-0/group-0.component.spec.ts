import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Group0Component } from './group-0.component';

describe('Group0Component', () => {
  let component: Group0Component;
  let fixture: ComponentFixture<Group0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Group0Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Group0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
