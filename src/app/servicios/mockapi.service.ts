import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MockapiService {
  ROOT_URL = "https://61b9310a38f69a0017ce5f21.mockapi.io/peliculas";
//hacer interface
  constructor(private http: HttpClient) { }

  obtenerPeliculas(){
    return this.http.get<any>(this.ROOT_URL);
  }
}
