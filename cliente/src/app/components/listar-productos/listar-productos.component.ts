import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { Producto } from '../../models/Producto';

@Component({
  selector: 'app-listar-productos',
  templateUrl: './listar-productos.component.html',
  styleUrls: ['./listar-productos.component.css']
})
export class ListarProductosComponent implements OnInit {
  productos: Producto[] = [];

  constructor(private productoService: ProductoService) { }

  ngOnInit(): void {
    this.cargarProductos();
  }

  cargarProductos(): void {
    this.productos = this.productoService.obtenerProductos();
  }

  eliminarProducto(nombre: string): void {
    this.productoService.eliminarProducto(nombre);
    this.cargarProductos();
  }

  editarProducto(nombre: string, producto: Producto): void {
    // Aquí podrías implementar la lógica para editar el producto
    // y luego recargar la lista de productos.
    // Por ejemplo, abrir un modal con un formulario para editar el producto.

      this.productoService.editarProducto(nombre, producto);
      this.productos = this.productoService.obtenerProductos();
  }
}



