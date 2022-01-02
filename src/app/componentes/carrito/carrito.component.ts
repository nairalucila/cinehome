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
  productoSeleccionados: PeliculaSeleccionada[] = [];
  displayedColumns: string[] = ['pelicula', 'precio', 'eliminar'];
  producto: object;
  idUsuario: number = Number(localStorage.getItem('INITIALIZACION_IN'));

  /** Gets the total cost of all transactions. */
  obtenerMontoTotal() {
    return this.productoSeleccionados
      .map((peli) => peli.precio)
      .reduce((acc, value) => acc + value, 0);
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
    console.log(productoSelec.id);
    this.pedidoService.eliminarPedido(productoSelec.id).subscribe((info) => {
      
      this.productoSeleccionados = this.productoSeleccionados.filter((p) => {
        return p.id !== info.id
      })
      console.log('Pedido eliminado con éxito');
    });
  }
}
