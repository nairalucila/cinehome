import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PeliculasService, Genero } from 'src/app/servicios/peliculas.service';
import { Pedido, PedidosService } from 'src/app/servicios/pedidos.service';

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
interface Detalles {
  original_title: string;
  genres?: Genero[];
  overview: string;
  poster_path: string;
  vote_average: number;
}
@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss'],
})
export class DetalleComponent implements OnInit {
  id: string = '';
  idDetalle: number = 0;
  detalles: Detalles;
  img_url: string = 'https://image.tmdb.org/t/p/w500';
  pathImagen: string = '';
  nuevoPedido: Pedido;
  listaPeliculasRecomendas: Peliculas[] = [];
  idUsuario: number = Number(localStorage.getItem('INITIALIZACION_IN'));

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private peliculaService: PeliculasService,
    private pedidoService: PedidosService
  ) {
    this.detalles = {
      original_title: 'title',
      overview: 'overview',
      poster_path: 'img/jpg',
      vote_average: 0,
    };
    
    this.nuevoPedido = {
      titulo: '',
      precio: 0,
      idUsuario: this.idUsuario,
    };
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
    });

    this.peliculaService.obtenerPeliculaPorId(this.id).subscribe((peli) => {
      let generos: Genero[] = [];
      peli.genres.forEach((gen: any) => {
        let g = gen.name;
        generos.push(g);
      });

      this.detalles = {
        original_title: peli.original_title,
        overview: peli.overview,
        genres: generos,
        poster_path: peli.poster_path,
        vote_average: peli.vote_average,
      };

      this.pathImagen = this.img_url + this.detalles.poster_path;
    });

    this.obtenerRecomendadas();
  }

  obtenerRecomendadas() {
    this.id.toString();
    this.peliculaService.obtenerRelacionadas(this.id).subscribe((peliculas) => {
      console.log('RECOMENDADAS', peliculas);

      this.listaPeliculasRecomendas = peliculas.results;
    });
  }

  agregarAlCarrito(pelicula: string, precio: any) {
    this.nuevoPedido = {
      titulo: pelicula,
      precio: precio,
      idUsuario: this.idUsuario,
    };
  };

  //REVISAR
  detallePelicula(id: number) {
    this.idDetalle = id;
    this.router.navigate(['/detalle', { id: this.idDetalle }]);
  }
}
