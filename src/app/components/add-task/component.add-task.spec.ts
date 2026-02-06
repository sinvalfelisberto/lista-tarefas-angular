import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentAddTask } from './component.add-task';

describe('ComponentAddTask', () => {
  let component: ComponentAddTask;
  let fixture: ComponentFixture<ComponentAddTask>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentAddTask]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentAddTask);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
