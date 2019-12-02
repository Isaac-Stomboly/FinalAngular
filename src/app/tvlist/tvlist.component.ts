import { Component } from '@angular/core';
import { TVService } from './tvlist.service';

@Component({
    selector: 'tv-list',
    templateUrl: './tvlist.component.html',
    styleUrls: ['./tvlist.component.css']
})

export class TVList {
    shows: any[] = [];
    listShows: any[] = [];
    imgUrl: string = "https://image.tmdb.org/t/p/w185";
    constructor(private tvService: TVService) {
        this.tvService.getTV().subscribe((tvShows:any = []) => {
            this.shows = tvShows.results;
        })
        for (let i = 0; i < this.shows.length; i++) {
            console.log(this.shows[i]);
        }
    }
}