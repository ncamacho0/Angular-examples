import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentChildTwoComponentComponent } from './component-child-two-component.component';

describe('ComponentChildTwoComponentComponent', () => {
  let component: ComponentChildTwoComponentComponent;
  let fixture: ComponentFixture<ComponentChildTwoComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentChildTwoComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentChildTwoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
