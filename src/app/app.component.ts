import { Component, ViewChild, AfterViewInit,  ElementRef, ViewChildren, QueryList } from '@angular/core';
import { ComponentChildComponent } from './component-child-component/component-child-component.component';
import { ComponentChildTwoComponent } from './component-child-two-component/component-child-two-component.component';
import { ComponentChildTreeComponent } from './component-child-tree-component/component-child-tree-component.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  value: string;
  passValue(event: string) {
    this.value = event;
  }
  @ViewChild(ComponentChildComponent, { static: true}) testOne: ComponentChildComponent;

   // I am working with a reference from type one
   @ViewChild('thisIsAReferenceOne', { static: true }) testOneWRef: ComponentChildComponent;
   // I am working with a reference
   @ViewChild('thisIsAReference', { static: true }) testTwo: ComponentChildTwoComponent;
   // I am working in a tag with a reference
   @ViewChild('three', { static: true }) testThree: ElementRef;
   // I am a Query List of Element Ref
   @ViewChildren(ComponentChildTreeComponent) testChildrenElement: QueryList<ComponentChildTreeComponent>;
   // I am a Query List of appTestDirective
  //  @ViewChildren(TestDirective) testChildrenDirectives: QueryList<TestDirective>;
  
  ngAfterViewInit(): void {
    console.log('ViewChild with Component<ComponentChildComponent>: ', this.testOne)
   console.log('ViewChild with Component<ComponentChildComponent> using a referente template: ', this.testOneWRef)
   console.log('ViewChild with Component<ComponentChildTwoComponent>: aqui!', this.testTwo.hola())
   console.log('ViewChild with ElementRef using a referente template:', this.testThree)
  // console.log('ViewChildren using a Component<ComponentThreeComponent>: ', this.testChildrenElement)
  }
}
