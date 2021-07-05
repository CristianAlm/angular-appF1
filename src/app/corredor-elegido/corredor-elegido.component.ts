import { Component, OnInit } from '@angular/core';
import { observable } from 'rxjs';
import { Corredor } from '../corredor-list/Corredor';
import { CorredorMostrarService } from '../corredor-mostrar.service';

@Component({
  selector: 'app-corredor-elegido',
  templateUrl: './corredor-elegido.component.html',
  styleUrls: ['./corredor-elegido.component.scss']
})
export class CorredorElegidoComponent implements OnInit {

  mostrarCorredor: Corredor[] = [];
  
  constructor(private mostrar: CorredorMostrarService) { 
    mostrar.mostrarCorredor.subscribe((observable) => this.mostrarCorredor = observable)
  }

  ngOnInit(): void {
  }

}
