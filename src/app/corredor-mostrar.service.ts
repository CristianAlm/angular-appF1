import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Corredor } from './corredor-list/Corredor';
/**
 * Manejo la logica de mostrar el corredor
 * 
 */

@Injectable({
  providedIn: 'root'
})
export class CorredorMostrarService {

  private _mostrarCorredor: Corredor[] = [];

  mostrarCorredor: BehaviorSubject<Corredor[]> = new BehaviorSubject(this._mostrarCorredor);

  constructor() { }

  addToMostrar(corredor: Corredor) {
    this._mostrarCorredor.push( {... corredor});
    /*
    let item: Corredor = this.mostrarCorredor.find((v1) => v1.name == corredor.name);

    if(!item){
    }

    */
    console.log(this._mostrarCorredor);
    this.mostrarCorredor.next(this._mostrarCorredor); // equivalente al emit

    //throw new Error('Method not implemented.');
  }

}
