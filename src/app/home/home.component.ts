import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  vd1:string= "../assets/videoplayback.mp4";

  constructor() { }

  ngOnInit(): void {
  }

}
