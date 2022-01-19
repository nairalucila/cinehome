import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { PedidosService, Pedido } from 'src/app/servicios/pedidos.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

// interface PeliculaSeleccionada {
//   titulo: string;
//   precio: number;
//   idUsuario: string | null;
//   id?: number;
// }
@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss'],
})
export class CarritoComponent implements OnInit, OnChanges {
  productoSeleccionados: Pedido[] = [];
  displayedColumns: string[] = ['pelicula', 'precio', 'eliminar'];
  producto: object;
  idUsuario: string;

  constructor(
    private pedidoService: PedidosService,
    private _snackBar: MatSnackBar,
    private route: Router
  ) {
    this.producto = {};
    const idlocalstorage = localStorage.getItem('INITIALIZACION_IN')
    if(!idlocalstorage) {
      this.route.navigate(['/login']);
      throw new Error('No se encuentra id')
    }
    this.idUsuario = idlocalstorage ;
  }

  ngOnInit(): void {
    this.traerPedidosBaseDatos();
  }
 
  obtenerMontoTotal() {
    return this.productoSeleccionados
      .map((peli) => peli.precio)
      .reduce((acc, value) => acc + value, 0);
  }

  traerPedidosBaseDatos() {
    this.pedidoService
      .traerPedidosBaseDatos(this.idUsuario)
      .subscribe((pedidos: Pedido[]) => {
        this.productoSeleccionados = pedidos;
      });
  }

  ngOnChanges(changes: SimpleChanges) {}

  eliminarPelicula(productoSelec: any) {
    
    this.pedidoService.eliminarPedido(productoSelec._id).subscribe((info) => {
            
      this.productoSeleccionados = this.productoSeleccionados.filter((p) => {
                return p._id !== productoSelec._id;
      });
            this._snackBar.open("Pedido eliminado con éxito", "", {duration: 1000});
    });
  }
}
