import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
    selector: 'my-heros',
    templateUrl: 'app/views/heroes.component.html',
    styleUrls: ['app/styles/heroes.component.css']
})
export class HeroesComponent implements OnInit {

    heroes: Hero[];
    selectedHero: Hero;

    constructor(
        private router: Router,
        private heroService: HeroService) { }

    // OnInit interface
    ngOnInit(): void {
        this.getHeroes();
    }

    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }

    getHeroes(): void {
        this.heroService.getHeroes().then(heros => this.heroes = heros);
//        this.heroService.getHeroesSlowly().then(heros => this.heroes = heros);
    }

    gotoDetail(): void {
        this.router.navigate(['/detail', this.selectedHero.id]);
    }
}
