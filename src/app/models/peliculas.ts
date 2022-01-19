export interface Genero {
    id: number,
    nombre: string,
  }
  
export interface Peliculas {
    genre_ids: Genero;
    id: number;
    original_title: string;
    poster_path: string;
    vote_average: number;
    vote_count: number;
    precio?: number;
  }

  