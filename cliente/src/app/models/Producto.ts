// ceamos nuestro modelo
export class Producto{
  _id?:number
  nombre:string
  categoria: string
  ubicacion: string
  precio: number

   // parar que funcionen bien creamos un constructor que se inicializa cuando creamos el producto
   constructor(nombre:string, categorria:string,ubicacion:string, price:number){
    this.nombre = nombre;
    this.categoria = categorria;
    this.ubicacion = ubicacion;
    this.precio = price;

   }
}
