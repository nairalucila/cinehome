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

  traerPedidosBaseDatos(idUsuario: number) {
    let urlConEndpoint = this.apiUrl + "?idUsuario=" + idUsuario;

    return this.http.get<Pedido[]>(urlConEndpoint);
  }



  registrarPedido( pedido: Pedido): Observable<Pedido> {
    return this.http.post<Pedido>(this.apiUrl, pedido);
  }
}
