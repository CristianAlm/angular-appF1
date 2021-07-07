import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Corredor } from './corredor-list/Corredor';

const URL = 'https://60e5526f5bcbca001749ecc1.mockapi.io/api/corredor1/Corredor'

@Injectable({
  providedIn: 'root'
})
export class CorredorDataService {

  constructor(private http: HttpClient) { }

/**
 * Consumo la API y devuelve un observable
 */

  public getAll(): Observable<Corredor[]>{
    
    return this.http.get<Corredor[]>(URL);
  }
}
