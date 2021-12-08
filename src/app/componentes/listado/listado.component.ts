import { Component, OnInit } from '@angular/core';

interface Peliculas {
  titulo: string,
  genero: string,
  año: number,
  stock: number,
  precio: number,
  img: string

}

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {

  listaPeliculas: Peliculas[];

  constructor() {
    this.listaPeliculas = [{
      titulo: "Frozen, el reino del Hielo",
      genero: "animado",
      año: 2011,
      stock: 115,
      precio: 200,
      img:"https://www.caratulas.com/peliculas/peliculas/H/Hara_Kiri_Muerte_De_Un_Samurai/Hara_Kiri_Muerte_De_Un_Samurai-Cartel.jpg"
    },
    {
      titulo: "Habemus Papam",
      genero: "documental",
      año: 2019,
      stock: 115,
      precio: 200,
      img:"https://www.caratulas.com/peliculas/peliculas/H/Hara_Kiri_Muerte_De_Un_Samurai/Hara_Kiri_Muerte_De_Un_Samurai-Cartel.jpg"
    },
    {
      titulo: "Hellboy",
      genero: "comedia",
      año: 2011,
      stock: 115,
      precio: 200,
      img:"https://www.caratulas.com/peliculas/peliculas/H/Hara_Kiri_Muerte_De_Un_Samurai/Hara_Kiri_Muerte_De_Un_Samurai-Cartel.jpg"
    },
    {
      titulo: "Frozen, el reino del Hielo",
      genero: "animado",
      año: 2011,
      stock: 115,
      precio: 200,
      img:"https://www.caratulas.com/peliculas/peliculas/H/Hara_Kiri_Muerte_De_Un_Samurai/Hara_Kiri_Muerte_De_Un_Samurai-Cartel.jpg"
    },
    
    ]
  }

  ngOnInit(): void {
  }

}
