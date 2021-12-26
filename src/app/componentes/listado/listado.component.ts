import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { PedidosService, PeliculaSeleccionada } from 'src/app/servicios/pedidos.service';
import { MockapiService } from '../../servicios/mockapi.service';
interface Peliculas {
  titulo: string,
  genero: string,
  año: number,
  stock: number,
  precio: number,
  img: string
}

// interface PeliculaSeleccionada {
//   titulo: string,
//   cantidad: number,
//   precio: number,
// }

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit, OnChanges {

  listaPeliculas: Peliculas[] = [];
  cantidadPeliculas: number;
  peliculaSeleccionadas: PeliculaSeleccionada[];
  algo: string;

  constructor(private mockapi: MockapiService, private pedidoService: PedidosService) {
    this.algo = "hola"
    this.peliculaSeleccionadas = [];
    this.cantidadPeliculas = 0;
    
  }

  ngOnInit(): void {
    this.traerPeliculaService();
  }

  ngOnChanges(changes: SimpleChanges): void {
      
  }

traerPeliculaService(){
  this.mockapi.obtenerPeliculas().subscribe((pelis: any)=>{
    return this.listaPeliculas = pelis;
  })
}

  agregarAlCarrito(pelicula: string, precio: number) {
    /*/**
    lista de peliculas 
    agrega una nueva a la lista y si ya existe la busca y le incrementa la cantidad

    entonces 
    buscas si el indice es -1
      agrego en nuevo elemento a la lista
    sino es asi
      busco con ese indice el elemento que ya existe y le sumo 1 a la cantidad 
     */
  
    let index = this.peliculaSeleccionadas.findIndex(peli => peli.titulo == pelicula);
    if(index == -1) {
      let agrupacionPeliselegidas = {
        titulo: pelicula,
        cantidad: 1,
        precio: precio
      }
      this.peliculaSeleccionadas = [...this.peliculaSeleccionadas, agrupacionPeliselegidas];
      this.pedidoService.enviarPedidosCarrito(this.peliculaSeleccionadas);
    } else {
      this.peliculaSeleccionadas[index].cantidad += 1;
      this.pedidoService.enviarPedidosCarrito(this.peliculaSeleccionadas);
    }
  }


}
