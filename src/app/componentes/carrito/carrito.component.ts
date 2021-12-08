import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';


interface PeliculaSeleccionada {
  titulo: string,
  cantidad:number,
  precio: number,
}

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit {

  @Input() productoSeleccionados: PeliculaSeleccionada[] = []; 

  displayedColumns: string[] = ['pelicula', 'cantidad', 'precio'];
 

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
  constructor() {
 
  }

  ngOnInit(): void {
    console.log("COMPON HIJO", this.productoSeleccionados)

  }

  // ngOnChanges(changes: SimpleChanges){
  //   // this.productoSeleccionados = this.productos;
  // }

}
