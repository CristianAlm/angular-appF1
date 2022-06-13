import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-elegir',
  templateUrl: './input-elegir.component.html',
  styleUrls: ['./input-elegir.component.scss']
})
export class InputElegirComponent implements OnInit {

  constructor() { }

  @Input()
  elegido!: boolean;

  @Output()
  elegidoChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  ngOnInit(): void {
  }

  eleccion(): void{
    if(this.elegido == false){
      this.elegido= true;
      this.elegidoChange.emit(this.elegido);   
    }else{
      this.elegido= false;
      this.elegidoChange.emit(this.elegido);
    }
  }

}
