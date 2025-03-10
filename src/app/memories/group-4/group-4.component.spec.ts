import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Group4Component } from './group-4.component';

describe('Group4Component', () => {
  let component: Group4Component;
  let fixture: ComponentFixture<Group4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Group4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Group4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
