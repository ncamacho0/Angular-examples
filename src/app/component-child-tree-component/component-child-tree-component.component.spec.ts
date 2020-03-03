import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentChildTreeComponentComponent } from './component-child-tree-component.component';

describe('ComponentChildTreeComponentComponent', () => {
  let component: ComponentChildTreeComponentComponent;
  let fixture: ComponentFixture<ComponentChildTreeComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentChildTreeComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentChildTreeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
