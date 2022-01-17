import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  value:any = 'Clear me';
  idForDelete = new FormControl('');


  constructor() { }


  ngOnInit(): void {
  }

  sendValue(id: any){
    console.log(id.value);
    //traer servicio, ver de convertir a num o nose y pasar al serv para q elimine,
  }
}
