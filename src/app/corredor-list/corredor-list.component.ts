import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-corredor-list',
  templateUrl: './corredor-list.component.html',
  styleUrls: ['./corredor-list.component.scss']
})
export class CorredorListComponent implements OnInit {

  corredor = {
    "name": "Charles Leclerc",
    "team": "Ferrari",
    "age": 28,
    "nationality": "Monegasco",
    "champion": false,
    "description": "Loren ipsum",
    "imgCorredor": "assets/img/leclerc.jpg",
    "imgTeam": "assets/img/ferrari.jpg",
  }

  constructor() { }

  ngOnInit(): void {
  }

}
