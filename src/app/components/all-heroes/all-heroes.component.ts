import { Component } from '@angular/core';
import {JsonPipe, NgForOf} from "@angular/common";
import {Hero} from "../../models/hero";
import {RouterLink} from "@angular/router";
import {HeroApiService} from "../../services/hero-api.service";
import {HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-all-heroes',
  standalone: true,
  imports: [
    JsonPipe,
    NgForOf,
    RouterLink,
    HttpClientModule
  ],
  providers : [HeroApiService],
  templateUrl: './all-heroes.component.html',
  styleUrl: './all-heroes.component.css'
})
export class AllHeroesComponent {

  public heroes : Array<Hero> //any[]

  constructor(private heroService : HeroApiService) {
    this.heroes = []
  }

  public addHeroes(){
   this.heroService.getAllHeroes().subscribe((data : Hero[]) => this.heroes = data)
  }

}
