import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



export interface Genero {
  id: number,
  nombre: string,
}

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {
  generos_api_url: string = "https://api.themoviedb.org/3/genre/movie/list?api_key=18f44261f2bdf99e218a95146792d24d&language=es";


  //API URL FALTA PAG 1
  url_api: string = "https://api.themoviedb.org/3/movie/popular?api_key=18f44261f2bdf99e218a95146792d24d&language=ES&page=1";

  //IMAGE URL
  img_url: string = "https://image.tmdb.org/t/p/w500/gSZyYEK5AfZuOFFjnVPUCLvdOD6.jpg"

  idMovie: string = "";
  
  url_api_relacionados: string = "https://api.themoviedb.org/3/movie/" + this.idMovie + "/similar?api_key=18f44261f2bdf99e218a95146792d24d&language=es&page=1"

  constructor(private http: HttpClient) {
    
  }
  


  obtenerPeliculas() {
    return this.http.get<any>(this.url_api);
  }

  obtenerRelacionadas() {

    return this.http.get<any>(this.url_api);
  }
}
