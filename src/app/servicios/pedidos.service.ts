import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {Pedido} from '../models/pedidos';

// export interface Pedido {
//   titulo: string;
//   precio: number;
//   idUsuario: string;
//   _id?: string;
// }

@Injectable({
  providedIn: 'root',
})
export class PedidosService {
  apiUrl: string = 'https://61c5170cc003e70017b795a8.mockapi.io/pedidos';
  apiUrlBack: string = 'http://localhost:3000/';

  private pedidoEntrante = new Subject<Pedido[]>();

  constructor(private http: HttpClient) {}

  //APIS CON NUEVA URL

  traerTodosPedidos(){
    let apiUrlPedidos = this.apiUrlBack + "/api/pedidos";
    return this.http.get<Pedido[]>(apiUrlPedidos);  
  }

  registrarPedido(pedido: Pedido): Observable<Pedido> {
    let apiUrlPedidos = this.apiUrlBack + "pedidos";
    return this.http.post<Pedido>(apiUrlPedidos, pedido);
  }

  traerPedidosBaseDatos(idUsuario: string) {
    let apiUrlPedidos = this.apiUrlBack + "pedidos/" + idUsuario;

    return this.http.get<Pedido[]>(apiUrlPedidos);
  }

  eliminarPedido(idPedido: string) {
    let apiUrlPedidos = this.apiUrlBack + "pedidos/" + idPedido;
    return this.http.delete<Pedido>(apiUrlPedidos);
  }

  //APIS CON VIEJA URL

  // traerPedidosBaseDatos2(idUsuario: number) {
  //   let urlConEndpoint = this.apiUrl + '?idUsuario=' + idUsuario;

  //   return this.http.get<Pedido[]>(urlConEndpoint);
  // }

  // registrarPedido2(pedido: Pedido): Observable<Pedido> {
  //   return this.http.post<Pedido>(this.apiUrl, pedido);
  // }

  // eliminarPedido2(idPedido: number) {
  //   let apiUrlConId = this.apiUrl + '/' + idPedido;
  //   return this.http.delete<Pedido>(apiUrlConId);
  // }
}
