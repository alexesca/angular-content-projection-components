import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosMultislotComponent } from './todos-multislot.component';

describe('TodosMultislotComponent', () => {
  let component: TodosMultislotComponent;
  let fixture: ComponentFixture<TodosMultislotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodosMultislotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosMultislotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
