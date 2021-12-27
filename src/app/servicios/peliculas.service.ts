import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  url_api: string = "https://api.themoviedb.org/3/movie/popular?api_key=18f44261f2bdf99e218a95146792d24d&language=ES&page=1";

  constructor() { }
}
