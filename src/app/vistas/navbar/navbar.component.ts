import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { 
    
  }

  ngOnInit(): void {
  }
  //Se tiene pensado que se abra como modal
  
  // openDialog() {
  //   this.dialog.open(CarritoComponent);
  // }

}


