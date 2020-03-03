import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-component-child-two-component',
  templateUrl: './component-child-two-component.component.html',
  styleUrls: ['./component-child-two-component.component.scss']
})
export class ComponentChildTwoComponent implements OnInit {
  hola(){
    console.log("EStoy accesando");
  }
  constructor() { }

  ngOnInit() {
  }

}
