import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Group3Component } from './group-3.component';

describe('Group3Component', () => {
  let component: Group3Component;
  let fixture: ComponentFixture<Group3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Group3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Group3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
