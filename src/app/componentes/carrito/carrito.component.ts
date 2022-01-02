import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { PedidosService, Pedido } from 'src/app/servicios/pedidos.service';
import { PeliculasService } from 'src/app/servicios/peliculas.service';

interface PeliculaSeleccionada {
  titulo: string;
  precio: number;
  idUsuario: number;
  id?: number;
}
@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss'],
})
export class CarritoComponent implements OnInit, OnChanges {
  // @Input() productoSeleccionados: PeliculaSeleccionada[] = [
  //   { titulo: 'Duro de matar', precio: 219 },
  //   { titulo: 'Eternals', precio: 319 },
  // ];

  productoSeleccionados: PeliculaSeleccionada[] = [];
  displayedColumns: string[] = ['pelicula', 'precio', 'eliminar'];
  producto: object;
  idUsuario: number = Number(localStorage.getItem('INITIALIZACION_IN'));

  /** Gets the total cost of all transactions. */
  getTotalCost() {
    console.log('dmf');
  }

  constructor(private pedidoService: PedidosService) {
    this.producto = {};
  }

  ngOnInit(): void {
    this.traerPedidosBaseDatos();
  }

  traerPedidosBaseDatos() {
    this.pedidoService
      .traerPedidosBaseDatos(this.idUsuario)
      .subscribe((pedidos: PeliculaSeleccionada[]) => {
        this.productoSeleccionados = pedidos;
      });
  }

  ngOnChanges(changes: SimpleChanges) {}

  eliminarPelicula(productoSelec: any) {
    //  console.log(productoSelec);
  }
}
