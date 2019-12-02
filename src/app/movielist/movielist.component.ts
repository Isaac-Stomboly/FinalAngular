import { Component } from "@angular/core";
import { MovieService } from './movielist.service';

@Component({
    selector: 'movie-list',
    templateUrl: './movielist.component.html',
    styleUrls: ['./movielist.component.css']
})

export class MovieList {
    movies: any[] = [];
    actualMovieList: any[] = [];
    imgUrl: string = "https://image.tmdb.org/t/p/w185";
    constructor(private movieService: MovieService) {
        this.movieService.getMovie().subscribe((movie:any = []) => {
            this.movies = movie.results;
            console.log(this.movies);
            
        })
    }
}