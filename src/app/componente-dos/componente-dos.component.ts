import { Component, OnInit, Input } from '@angular/core';
import { DataService}  from '../data.service';

@Component({
  selector: 'app-componente-dos',
  templateUrl: './componente-dos.component.html',
  styleUrls: ['./componente-dos.component.scss']
})
export class ComponenteDosComponent implements OnInit {
  @Input() inputSaludo: string;
  name: string;
  constructor(private datasService: DataService) { }
  ngOnInit(){
    this.datasService.subjectData$.subscribe( v => this.name = v );
  }

}
