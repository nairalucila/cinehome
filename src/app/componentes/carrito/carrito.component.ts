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

  @Input() productoSeleccionados: PeliculaSeleccionada[] = [];

  displayedColumns: string[] = ['pelicula', 'cantidad', 'precio', 'eliminar'];
  producto: object;

  // transactions: any[] = [
  //   {item: 'Beach ball', cost: 4},
  //   {item: 'Towel', cost: 5},
  //   {item: 'Frisbee', cost: 2},
  //   {item: 'Sunscreen', cost: 4},
  //   {item: 'Cooler', cost: 25},
  //   {item: 'Swim suit', cost: 15},
  // ];

  /** Gets the total cost of all transactions. */
  getTotalCost() {
    console.log("dmf")

  }
  //@Inject(MAT_DIALOG_DATA) public data: DialogData
  constructor() {
    this.producto = {}
  }

  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges) {

  }

  eliminarPelicula(productoSelec: any) {
    console.log(productoSelec);
    // this.productoSeleccionados.find(prod =>{
    //logica para eliminar este objeto
    // })

  }
}
