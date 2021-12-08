import { Component, OnInit } from '@angular/core';

interface Peliculas {
  titulo: string,
  genero: string,
  año: number,
  stock: number,
  precio: number,
  img: string
}

interface PeliculaSeleccionada {
  titulo: string,
  cantidad: number,
  precio: number,
}

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {

  listaPeliculas: Peliculas[];
  cantidadPeliculas: number;
  peliculaSeleccionadas: PeliculaSeleccionada[];
  algo: string;

  constructor() {
    this.algo = "hola"
    this.peliculaSeleccionadas = [];
    this.cantidadPeliculas = 0;
    this.listaPeliculas = [{
      titulo: "Frozen, el reino del Hielo",
      genero: "animado",
      año: 2011,
      stock: 115,
      precio: 200,
      img: "https://www.caratulas.com/peliculas/peliculas/H/Hara_Kiri_Muerte_De_Un_Samurai/Hara_Kiri_Muerte_De_Un_Samurai-Cartel.jpg"
    },
    {
      titulo: "Habemus Papam",
      genero: "documental",
      año: 2019,
      stock: 115,
      precio: 200,
      img: "https://www.caratulas.com/peliculas/peliculas/H/Hara_Kiri_Muerte_De_Un_Samurai/Hara_Kiri_Muerte_De_Un_Samurai-Cartel.jpg"
    },
    {
      titulo: "Hellboy",
      genero: "comedia",
      año: 2011,
      stock: 115,
      precio: 200,
      img: "https://www.caratulas.com/peliculas/peliculas/H/Hara_Kiri_Muerte_De_Un_Samurai/Hara_Kiri_Muerte_De_Un_Samurai-Cartel.jpg"
    },
    {
      titulo: "Frozen, el reino del Hielo",
      genero: "animado",
      año: 2011,
      stock: 115,
      precio: 200,
      img: "https://www.caratulas.com/peliculas/peliculas/H/Hara_Kiri_Muerte_De_Un_Samurai/Hara_Kiri_Muerte_De_Un_Samurai-Cartel.jpg"
    },
    {
      titulo: "Frozen, el reino del Hielo",
      genero: "animado",
      año: 2011,
      stock: 115,
      precio: 200,
      img: "https://www.caratulas.com/peliculas/peliculas/H/Hara_Kiri_Muerte_De_Un_Samurai/Hara_Kiri_Muerte_De_Un_Samurai-Cartel.jpg"
    },
    {
      titulo: "Frozen, el reino del Hielo",
      genero: "animado",
      año: 2011,
      stock: 115,
      precio: 200,
      img: "https://www.caratulas.com/peliculas/peliculas/H/Hara_Kiri_Muerte_De_Un_Samurai/Hara_Kiri_Muerte_De_Un_Samurai-Cartel.jpg"
    },
    {
      titulo: "Frozen, el reino del Hielo",
      genero: "animado",
      año: 2011,
      stock: 115,
      precio: 200,
      img: "https://www.caratulas.com/peliculas/peliculas/H/Hara_Kiri_Muerte_De_Un_Samurai/Hara_Kiri_Muerte_De_Un_Samurai-Cartel.jpg"
    },
    {
      titulo: "Frozen, el reino del Hielo",
      genero: "animado",
      año: 2011,
      stock: 115,
      precio: 200,
      img: "https://www.caratulas.com/peliculas/peliculas/H/Hara_Kiri_Muerte_De_Un_Samurai/Hara_Kiri_Muerte_De_Un_Samurai-Cartel.jpg"
    },
    ]
  }

  ngOnInit(): void {
  }

  agregarAlCarrito(pelicula: string, precio: number) {
    /*/**
     * 




    lista de peliculas 
    agrega una nueva a la lista y si ya existe la busca y le incrementa la cantidad

    entonces 
    buscas si el indice es -1
      agrego en nuevo elemento a la lista
    sino es asi
      busco con ese indice el elemento que ya existe y le sumo 1 a la cantidad 
     */
  
    let index = this.peliculaSeleccionadas.findIndex(peli => peli.titulo == pelicula );
    if(index == -1) {
      let agrupacionPeliselegidas = {
        titulo: pelicula,
        cantidad: 1,
        precio: precio
      }
  
      this.peliculaSeleccionadas = [...this.peliculaSeleccionadas, agrupacionPeliselegidas];

    } else {
      this.peliculaSeleccionadas[index].cantidad += 1;
    }

  }


}
