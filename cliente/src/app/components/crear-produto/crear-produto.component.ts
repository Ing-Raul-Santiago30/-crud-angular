// src/app/components/crear-produto/crear-produto.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Producto } from '../../models/Producto';
import { ProductoService } from '../../services/producto.service';

@Component({
  selector: 'app-crear-produto',
  templateUrl: './crear-produto.component.html',
  styleUrls: ['./crear-produto.component.css']
})
export class CrearProdutoComponent {
  productoForm: FormGroup;

  constructor(private fb: FormBuilder,
              private router: Router,
              private toastr: ToastrService,
              private productoService: ProductoService) {

    this.productoForm = this.fb.group({
      producto: ['', Validators.required],
      categoria: ['', Validators.required],
      ubicacion: ['', Validators.required],
      precio: ['', Validators.required],
    });
  }

  agregarProducto(): void {
    if (this.productoForm.valid) {
      const PRODUCTO: Producto = {
        nombre: this.productoForm.get('producto')?.value,
        categoria: this.productoForm.get('categoria')?.value,
        ubicacion: this.productoForm.get('ubicacion')?.value,
        precio: parseFloat(this.productoForm.get('precio')?.value),
      };
      this.productoService.agregarProducto(PRODUCTO);
      this.toastr.info('El producto fue registrado con éxito', 'Producto registrado!', {
        timeOut: 2000,
      });
      this.router.navigate(['/']);
    }
  }
}
