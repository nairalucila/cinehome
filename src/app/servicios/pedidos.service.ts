import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

export interface PeliculaSeleccionada {
  titulo: string,
  cantidad: number,
  precio: number,
}

@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  apiUrl: string = "https://61c5170cc003e70017b795a8.mockapi.io/pedidos";
  private pedidoEntrante = new Subject<PeliculaSeleccionada[]>()

  constructor(private http: HttpClient) { }

  traerPedidosBaseDatos() {
    // let urlConEndpoint = this.apiUrl + `/${endpoint}`;
    return this.http.get(this.apiUrl);
  }

  enviarPedidosCarrito(pedidos: PeliculaSeleccionada[]) {
    this.pedidoEntrante.next(pedidos);
  };

  pasarPedidos():Observable<PeliculaSeleccionada[]>{
    return this.pedidoEntrante.asObservable();
  }


  registrarPedido(pedido: PeliculaSeleccionada): Observable<PeliculaSeleccionada> {
    return this.http.post<PeliculaSeleccionada>(this.apiUrl, pedido);
  }
}
