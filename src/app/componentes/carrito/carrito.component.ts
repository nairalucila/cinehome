import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';



interface PeliculaSeleccionada {
  titulo: string,
  cantidad: number,
  precio: number,
}

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit, OnChanges {

  @Input() productoSeleccionados: PeliculaSeleccionada[] = [
      {titulo: 'Beach ball',  cantidad: 3, precio: 4},
  ];

  displayedColumns: string[] = ['pelicula', 'cantidad', 'precio', 'eliminar'];
  producto: object;
  productoCantidad: number;

  // transactions: any[] = [
  //   {pelicula: 'Beach ball', cantidad: 1,precio: 4},
//];

  /** Gets the total cost of all transactions. */
  getTotalCost() {
    console.log("dmf")
  }
  
  //@Inject(MAT_DIALOG_DATA) public data: DialogData
  constructor() {
    this.producto = {}
    this.productoCantidad = this.productoSeleccionados[0].cantidad;

  }

  ngOnInit(): void {
console.log(this.productoCantidad)
  }

  ngOnChanges(changes: SimpleChanges) {
    
    
  }

  eliminarPelicula(productoSelec: any) {
    console.log(productoSelec);
   

  }
}
