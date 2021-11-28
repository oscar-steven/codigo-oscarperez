import { Injectable } from '@angular/core';
//Es la herramienta que me permite hacer peticiones en angular
import { HttpClient } from '@angular/common/http';
//Observable es la manera que se va enviar el resultado de mis peticiones, type
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  url: string =
    'https://617b321fd842cf001711bdcf.mockapi.io/api/codigo/productos';

  //inyeccion por dependencias, declarando como una propiedad privada mas
  constructor(private _Http: HttpClient) {}

  obtenerProductos(): Observable<any> {
    return this._Http.get(this.url);
  }
}
