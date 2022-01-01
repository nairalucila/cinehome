import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

export interface Pedido {
  titulo: string,
  precio: number,
  idUsuario:number,
  id?:number
}

@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  apiUrl: string = "https://61c5170cc003e70017b795a8.mockapi.io/pedidos";
  private pedidoEntrante = new Subject<Pedido[]>()

  constructor(private http: HttpClient) { }

  traerPedidosBaseDatos() {
    // let urlConEndpoint = this.apiUrl + `/${endpoint}`;
    return this.http.get(this.apiUrl);
  }

  enviarPedidosCarrito(pedidos: Pedido[]) {
    this.pedidoEntrante.next(pedidos);
  };

  pasarPedidos():Observable<Pedido[]>{
    return this.pedidoEntrante.asObservable();
  }


  registrarPedido( pedido: Pedido): Observable<Pedido> {
    return this.http.post<Pedido>(this.apiUrl, pedido);
  }
}
