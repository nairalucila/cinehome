import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculasService } from 'src/app/servicios/peliculas.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss']
})
export class DetalleComponent implements OnInit {

  id: string = "";

  constructor( private route: ActivatedRoute, private peliculaService: PeliculasService) { 
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      console.log("ID-->", this.id)
    });
    console.log(this.route);

    this.peliculaService.obtenerPeliculaPorId(this.id).subscribe(peli =>{
      console.log("Pelii->", peli)
    })

    
    
   
  }

}
