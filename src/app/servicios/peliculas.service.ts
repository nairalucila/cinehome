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
  
  //API URL FALTA PAG 1
  url_api: string = "https://api.themoviedb.org/3/movie/popular?api_key=18f44261f2bdf99e218a95146792d24d&language=ES&page=1";

  //API_MOVIE_PARAM
  url_api_id: string = "https://api.themoviedb.org/3/movie/{movie_id}"
  concat_apikey_lang: string = "?api_key=18f44261f2bdf99e218a95146792d24d&language=es-ES"

  //IMAGE URL
  img_url: string = "https://image.tmdb.org/t/p/w500/"

  idMovie: string = "";
  
  url_api_relacionados: string = "https://api.themoviedb.org/3/movie/" + this.idMovie + "/similar?api_key=18f44261f2bdf99e218a95146792d24d&language=es&page=1"

  constructor(private http: HttpClient) {
    
  }
  

  construirUrl(movieId: string){
    return `https://api.themoviedb.org/3/movie/${movieId}?api_key=18f44261f2bdf99e218a95146792d24d&language=es-ES`;
  }

  obtenerPeliculaPorId(idPelicula: string){
   let urlArmada =  this.construirUrl(idPelicula);
    return this.http.get<any>(urlArmada);
  }

  obtenerPeliculas() {
    return this.http.get<any>(this.url_api);
  }

  obtenerRelacionadas() {

    return this.http.get<any>(this.url_api);
  }
}
