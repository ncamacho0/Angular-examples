import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ComponenteUnoComponent } from './componente-uno/componente-uno.component';
import { ComponenteDosComponent } from './componente-dos/componente-dos.component';
import { FormsModule }   from '@angular/forms';
import { DataService}  from './data.service';
import { ComponentChildComponent } from './component-child-component/component-child-component.component';
import { ComponentChildTwoComponent } from './component-child-two-component/component-child-two-component.component';
import { ComponentChildTreeComponent } from './component-child-tree-component/component-child-tree-component.component';


@NgModule({
  declarations: [
    AppComponent,
    ComponenteUnoComponent,
    ComponenteDosComponent,
    ComponentChildComponent,
    ComponentChildTwoComponent,
    ComponentChildTreeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
