import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosConditionalContentProjectionComponent } from './todos-conditional-content-projection.component';

describe('TodosConditionalContentProjectionComponent', () => {
  let component: TodosConditionalContentProjectionComponent;
  let fixture: ComponentFixture<TodosConditionalContentProjectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodosConditionalContentProjectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosConditionalContentProjectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
