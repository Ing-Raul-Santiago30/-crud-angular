// src/app/services/producto.service.ts
import { Injectable } from '@angular/core';
import { Producto } from '../models/Producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private productos: Producto[] = [];

  constructor() { }

  obtenerProductos(): Producto[] {
    return this.productos;
  }

  agregarProducto(producto: Producto): void {
    this.productos.push(producto);
    this.guardarEnLocalStorage();
  }

  eliminarProducto(nombre: string): void {
    this.productos = this.productos.filter(producto => producto.nombre !== nombre);
    this.guardarEnLocalStorage();
  }

  editarProducto(nombre: string, producto: Producto): void {
    const index = this.productos.findIndex(p => p.nombre === nombre);
    if (index !== -1) {
      this.productos[index] = producto;
      this.guardarEnLocalStorage();
    }
  }

  private guardarEnLocalStorage(): void {
    localStorage.setItem('productos', JSON.stringify(this.productos));
  }

  private cargarDesdeLocalStorage(): void {
    const productos = localStorage.getItem('productos');
    if (productos) {
      this.productos = JSON.parse(productos);
    }
  }
}
