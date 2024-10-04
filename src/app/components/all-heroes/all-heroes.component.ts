import { Component } from '@angular/core';
import {JsonPipe, NgForOf} from "@angular/common";

@Component({
  selector: 'app-all-heroes',
  standalone: true,
  imports: [
    JsonPipe,
    NgForOf
  ],
  templateUrl: './all-heroes.component.html',
  styleUrl: './all-heroes.component.css'
})
export class AllHeroesComponent {

  public heroes : Array<any> //any[]

  constructor() {
    this.heroes = []
  }

  public addHeroes(){
    this.heroes.push({name : "Hulk", image : "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/sm/332-hulk.jpg"});
    this.heroes.push({name : "Batman", image : "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/sm/70-batman.jpg"});
    this.heroes.push({name : "Oui-oui", image : "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/sm/195-cyborg-superman.jpg"});
  }

}
