import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { PedidosService, Pedido } from 'src/app/servicios/pedidos.service';
import { Genero, PeliculasService } from 'src/app/servicios/peliculas.service';
import { MockapiService } from '../../servicios/mockapi.service';
import { MatSnackBar } from '@angular/material/snack-bar';
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

  nuevoPedido: Pedido;
  seAgrego: boolean;
  animacionCheck: boolean;
  listaPelicuasPopulares: any;

  img_url: string = 'https://image.tmdb.org/t/p/w500';

  idUsuario: number = Number(localStorage.getItem('INITIALIZACION_IN'));

  constructor(
    private router: Router,
    private mockapi: MockapiService,
    private pedidoService: PedidosService,
    private peliculaService: PeliculasService,
    private _snackBar: MatSnackBar
  ) {
    this.seAgrego = true;
    this.animacionCheck = false;
    this.peliculaSeleccionadas = [];
    this.cantidadPeliculas = 0;
    this.nuevoPedido = {
      titulo: '',
      precio: 0,
      idUsuario: this.idUsuario,
    };
  }

  ngOnInit(): void {

    for (let i = 0; i <= 5; i++) {
   
      this.peliculaService.obtenerPeliculas(i).subscribe((pelis: any) => {
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
        
        if (pedido) {
          this._snackBar.open("Película agregada con éxito", "", {duration: 1000});
          
        } else {
          this._snackBar.open("Error al agregar Película", "", {duration: 1000});
        }

        // this.seAgrego = false;
        // this.animacionCheck = true;
      });
  }
}
