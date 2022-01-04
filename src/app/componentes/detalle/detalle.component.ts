import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculasService, Genero } from 'src/app/servicios/peliculas.service';

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
  detalles: Detalles;
  img_url: string = "https://image.tmdb.org/t/p/w500";
  pathImagen: string ="";

  constructor(
    private route: ActivatedRoute,
    private peliculaService: PeliculasService
  ) {
    this.detalles = {
      original_title: 'title',
      overview: 'overview',
      poster_path: 'img/jpg',
      vote_average: 0,
    };
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
    });

    this.peliculaService.obtenerPeliculaPorId(this.id).subscribe((peli) => {
      console.log('Pelii->', peli);
      let generos: Genero[] = [];
      peli.genres.forEach((gen:any) => {
        let g = gen.name;
        generos.push(g)
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
  }
}
