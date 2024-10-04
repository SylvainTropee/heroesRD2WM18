import {Component, Inject} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HeroApiService} from "../../services/hero-api.service";
import {Hero} from "../../models/hero";
import {Observable} from "rxjs";
import {AsyncPipe, NgIf} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-hero-detail',
  standalone: true,
  imports: [
    NgIf,
    AsyncPipe,
    HttpClientModule
  ],
  providers : [HeroApiService],
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.css'
})
export class HeroDetailComponent {

  public id: string | null
  public hero$: Observable<Hero> | undefined

  constructor(
    /*@Inject(ActivatedRoute)*/ private route: ActivatedRoute,
    private heroService: HeroApiService
  ) {
    this.id = route.snapshot.paramMap.get('id');
    if (this.id) {
      this.getHero(+this.id)
    }
  }

  public getHero(id: number) {
    this.hero$ = this.heroService.getHeroById(id);
  }

}
