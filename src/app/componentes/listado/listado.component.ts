import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { PedidosService, Pedido } from 'src/app/servicios/pedidos.service';
import { Genero, PeliculasService } from 'src/app/servicios/peliculas.service';
import { MockapiService } from '../../servicios/mockapi.service';

interface PeliculaSeleccionada {
  titulo: string;
  cantidad: number;
  precio: number;
}

interface Peliculas {
  genre_ids: Genero;
  id: number;
  original_title: string;
  poster_path: string;
  vote_average: number;
  vote_count: number;
  precio?: number;
}

interface PeliculasPrev {
  page: number;
  results: Peliculas;
  total_pages: number;
  total_results: number;
}
@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss'],
})
export class ListadoComponent implements OnInit, OnChanges {
  listaPeliculas: Peliculas[] = [];
  cantidadPeliculas: number;
  peliculaSeleccionadas: PeliculaSeleccionada[];
  algo: string;

  nuevoPedido: Pedido;

  listaPelicuasPopulares: any;

  img_url: string = 'https://image.tmdb.org/t/p/w500';

  idUsuario: number = Number(localStorage.getItem('INITIALIZACION_IN'));

  constructor(
    private router: Router,
    private mockapi: MockapiService,
    private pedidoService: PedidosService,
    private peliculaService: PeliculasService
  ) {
    this.algo = 'hola';
    this.peliculaSeleccionadas = [];
    this.cantidadPeliculas = 0;
    this.nuevoPedido = {
      titulo: '',
      precio: 0,
      idUsuario: this.idUsuario,
    };
  }
  /**
       * en la imagen hace click y muestra detalle.
    rputer link al otro componente.
    y trae la descripcion de la otra api puntual.
    o en la vista obtener ese parametro.
    en ng init pedir detalles.
   */

  ngOnInit(): void {
    this.peliculaService.obtenerPeliculas().subscribe((pelis: any) => {
      pelis.results.map((peli: Peliculas) => {
        this.listaPeliculas.push({
          id: peli.id,
          original_title: peli.original_title,
          vote_average: peli.vote_average,
          poster_path: peli.poster_path,
          genre_ids: peli.genre_ids,
          vote_count: peli.vote_count,
          precio: peli.vote_count > 1000 ? 1270 : 965,
        });
      });
    });
  }

  ngOnChanges(changes: SimpleChanges): void {}

  detallePelicula(id: number) {
    this.router.navigate(['/detalle', { id: id }]);
  }

  agregarAlCarrito(pelicula: string, precio: any) {
    this.nuevoPedido = {
      titulo: pelicula,
      precio: precio,
      idUsuario: this.idUsuario,
    };

    this.pedidoService
      .registrarPedido(this.nuevoPedido)
      .subscribe((pedido: Pedido) => {

        //AGREGAR TOASTS
        if (pedido) {
          console.log('pedido enviado');
        } else {
          throw new Error('Eror al generar su pedido');
        }
      });
  }
}
