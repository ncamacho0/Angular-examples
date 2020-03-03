import { Component, OnInit, EventEmitter,Output  } from '@angular/core';
import { DataService}  from '../data.service';


@Component({
  selector: 'app-componente-uno',
  templateUrl: './componente-uno.component.html',
  styleUrls: ['./componente-uno.component.scss']
})
export class ComponenteUnoComponent {
  name: string;
  mensaje: string;

  constructor(private datasService: DataService) { }
  change(){
    this.datasService.data = this.name;
  }


  @Output() outputSaludo = new EventEmitter<string>();
  onKeyup() {
    this.outputSaludo.emit(this.mensaje);
  }
}
