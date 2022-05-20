import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {

  img1:string = "../assets/imagen.jpg";
  img2:string = "../assets/imagen2.webp";
  img3:string = "../assets/imagen3.jpeg";


  constructor() { }

  ngOnInit(): void {
  }

}
