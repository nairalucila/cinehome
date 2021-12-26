import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { PedidosService, PeliculaSeleccionada } from 'src/app/servicios/pedidos.service';

// interface PeliculaSeleccionada {
//   titulo: string,
//   cantidad: number,
//   precio: number,
// }

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit, OnChanges {

  @Input() productoSeleccionados: PeliculaSeleccionada[] = [
      {titulo: 'Duro de matar',  cantidad: 1, precio: 219},
      {titulo: 'Eternals',  cantidad: 1, precio: 319},
  ];

  displayedColumns: string[] = ['pelicula', 'cantidad', 'precio', 'eliminar'];
  producto: object;
  productoCantidad: number;

  /** Gets the total cost of all transactions. */
  getTotalCost() {
    console.log("dmf")
  }
  
  //@Inject(MAT_DIALOG_DATA) public data: DialogData
  constructor( private pedidoService: PedidosService) {
    this.producto = {}
    this.productoCantidad = this.productoSeleccionados[0].cantidad;

  }

  ngOnInit(): void {
    this.pedidoService.pasarPedidos().subscribe(pelis => console.log("EN CARRITO-->", pelis))
  }

  ngOnChanges(changes: SimpleChanges) {
    
  }

  eliminarPelicula(productoSelec: any) {
    console.log(productoSelec);

  }
}
