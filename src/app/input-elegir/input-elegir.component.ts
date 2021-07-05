import { Component, Input, OnInit, Output } from '@angular/core';
import { Corredor } from '../corredor-list/Corredor';

@Component({
  selector: 'app-input-elegir',
  templateUrl: './input-elegir.component.html',
  styleUrls: ['./input-elegir.component.scss']
})
export class InputElegirComponent implements OnInit {

  constructor() { }

  @Input()
  corredor!: Corredor;

  /**
   * 
  @Output()
  corredorChange: EventEmitter<Corredor> = new EventEmitter<Corredor>();
*/
  ngOnInit(): void {
  }

  eleccion(corredor: Corredor): void{
    if(corredor.elegido == false){
      corredor.elegido= true;   
    }else{
      corredor.elegido= false;
    }
  }

}
