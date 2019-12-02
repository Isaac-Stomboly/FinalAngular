import { Component } from "@angular/core";
import { MovieService } from '../movielist/movielist.service';
import { TVService } from '../tvlist/tvlist.service';

@Component({
    selector: 'starter',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})

export class HomeComponent {
    movies: any[] = [];
    shows: any[] = [];
    imgUrl: string = "https://image.tmdb.org/t/p/w185";
    constructor(private movieService: MovieService, private tvService: TVService) {
        this.movieService.getMovie().subscribe((movie:any = []) => {
            this.movies = movie.results;
        });
        this.tvService.getTV().subscribe((tvShows:any = []) => {
            this.shows = tvShows.results;
        });
    }
}