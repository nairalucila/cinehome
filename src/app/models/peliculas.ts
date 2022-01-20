export interface Genero {
  id: number,
  nombre: string,
}
export interface PeliculaSeleccionada {
  titulo: string;
  cantidad: number;
  precio: number;
}
export interface Peliculas {
  genre_ids: Genero;
  id: number;
  original_title: string;
  poster_path: string;
  vote_average: number;
  vote_count: number;
  precio?: number;
  stock?: number;
}

export interface Detalles {
  original_title: string;
  genres?: Genero[];
  overview: string;
  poster_path: string;
  vote_average: number;
  stock?: number;
}