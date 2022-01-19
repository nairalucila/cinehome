import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

export interface Pedido {
  titulo: string;
  precio: number;
  idUsuario: string | null;
  id?: number;
}

@Injectable({
  providedIn: 'root',
})
export class PedidosService {
  apiUrl: string = 'https://61c5170cc003e70017b795a8.mockapi.io/pedidos';
  apiUrlBack: string = 'http://localhost:3000/';

  private pedidoEntrante = new Subject<Pedido[]>();

  constructor(private http: HttpClient) {}

  //APIS CON NUEVA URL

  registrarPedido(pedido: Pedido): Observable<Pedido> {
    let apiUrlPedidos = this.apiUrlBack + "pedidos";
    return this.http.post<Pedido>(apiUrlPedidos, pedido);
  }


  //APIS CON VIEJA URL

  traerPedidosBaseDatos(idUsuario: number) {
    let urlConEndpoint = this.apiUrl + '?idUsuario=' + idUsuario;

    return this.http.get<Pedido[]>(urlConEndpoint);
  }

  registrarPedido2(pedido: Pedido): Observable<Pedido> {
    return this.http.post<Pedido>(this.apiUrl, pedido);
  }

  eliminarPedido(idPedido: number) {
    let apiUrlConId = this.apiUrl + '/' + idPedido;
    return this.http.delete<Pedido>(apiUrlConId);
  }
}
