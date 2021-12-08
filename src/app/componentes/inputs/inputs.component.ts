import { Component, OnInit, Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.scss']
})
export class InputsComponent implements OnInit {

  @Output() inputEmail = new EventEmitter<string>();

  constructor() {
  
   }

  ngOnInit(): void {
  }


  enviarDatos(value: string) {
    this.inputEmail.emit(value);
  }

}
