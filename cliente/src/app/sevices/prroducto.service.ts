import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from '../models/Producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private apiUrl = 'http://localhost:3000/productos';

  constructor(private http: HttpClient) { }

  agregarProducto(producto: Producto): Observable<any> {
    return this.http.post(this.apiUrl, producto);
  }

  obtenerProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.apiUrl);
  }

  eliminarProducto(nombre: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${nombre}`);
  }

  editarProducto(nombre: string, productoEditado: Producto): Observable<any> {
    return this.http.put(`${this.apiUrl}/${nombre}`, productoEditado);
  }
}
