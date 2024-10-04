import {Injectable} from '@angular/core';
import {Hero} from "../models/hero";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HeroApiService {

  public heroes: Hero[]

  constructor(
    private http : HttpClient
  ) {
    this.heroes = [];
  }

  public getAllHeroes() : Observable<Hero[]>{
    return this.http.get<Hero[]>("https://akabab.github.io/superhero-api/api/all.json");
  }

  public getHeroById(id : number) : Observable<Hero>{
    return this.http.get<Hero>(`https://akabab.github.io/superhero-api/api/id/${id}.json`);
  }


}
