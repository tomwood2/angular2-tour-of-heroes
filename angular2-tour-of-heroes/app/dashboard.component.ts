﻿import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
    selector: 'my-dashboard',
    templateUrl: 'app/views/dashboard.component.html',
    styleUrls: ['app/styles/dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    heroes: Hero[] = [];

    constructor(
        private router: Router,
        private heroService: HeroService) { }

    ngOnInit(): void {
        this.heroService.getHeroes()
            .then(heros => this.heroes = heros.slice(1, 5));
    }

    gotoDetail(hero: Hero): void {
        let link = ['/detail', hero.id];
        this.router.navigate(link);
    }

}