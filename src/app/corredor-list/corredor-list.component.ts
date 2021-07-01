import { Component, OnInit } from '@angular/core';
import { Corredor } from './Corredor';

@Component({
  selector: 'app-corredor-list',
  templateUrl: './corredor-list.component.html',
  styleUrls: ['./corredor-list.component.scss']
})
export class CorredorListComponent implements OnInit {

  corredores: Corredor[] = [
    {
      name: "Charles Leclerc",
      team: "Ferrari",
      age: 23,
      nationality: "Monegasco",
      champion: false,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus minima, aliquam illum enim, earum obcaecati, sunt non magnam quisquam nihil est dolores. Soluta tempore quae corrupti odio distinctio reiciendis laudantium.",
      imgCorredor: "assets/img/leclerc.jpg",
      imgTeam: "assets/img/ferrari.jpg",
      elegido:false,
    },
    {
      name: "Lewis Hamilton",
      team: "Mercedes",
      age: 36,
      nationality: "Britanico",
      champion: true,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus minima, aliquam illum enim, earum obcaecati, sunt non magnam quisquam nihil est dolores. Soluta tempore quae corrupti odio distinctio reiciendis laudantium.",
      imgCorredor: "assets/img/hamilton.jpg",
      imgTeam: "assets/img/mercedes.jpg",
      elegido:false,
    },
    {
      name: "Max Verstappen",
      team: "Red Bull",
      age: 23,
      nationality: "Neerlandés",
      champion: false,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus minima, aliquam illum enim, earum obcaecati, sunt non magnam quisquam nihil est dolores. Soluta tempore quae corrupti odio distinctio reiciendis laudantium.",
      imgCorredor: "assets/img/verstappen.jpg",
      imgTeam: "assets/img/redBull.jpg",
      elegido:false,
    },
    {
      name: "Lando Norris",
      team: "McLaren",
      age: 21,
      nationality: "Britanico",
      champion: false,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus minima, aliquam illum enim, earum obcaecati, sunt non magnam quisquam nihil est dolores. Soluta tempore quae corrupti odio distinctio reiciendis laudantium.",
      imgCorredor: "assets/img/norris.jpg",
      imgTeam: "assets/img/mcLaren.jpg",
      elegido:false,
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }
  eleccion(corredor: Corredor): void{
    if(corredor.elegido == false){
      corredor.elegido= true;   
    }else{
      corredor.elegido= false;
    }
  }

}
