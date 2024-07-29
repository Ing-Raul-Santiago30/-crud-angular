import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearProdutoComponent } from './components/crear-produto/crear-produto.component';
import { ListarProductosComponent } from './components/listar-productos/listar-productos.component';
import { EditarProductoComponent } from './components/editar-producto/editar-producto.component';
import { HolamundoComponent } from './components/holamundo/holamundo.component';

const routes: Routes = [
  { path: '', redirectTo: '/listar-productos', pathMatch: 'full' },
  { path: 'crear-producto', component: CrearProdutoComponent },
  { path: 'listar-productos', component: ListarProductosComponent },
  { path: 'editar-producto/:nombre', component: EditarProductoComponent },
  {path: 'hola-mundo', component: HolamundoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
