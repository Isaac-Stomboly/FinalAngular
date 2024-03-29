import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class TVService {
    constructor(private http: HttpClient) {}
    getTV(): Observable<any[]> {
        return this.http.get<any[]>("https://api.themoviedb.org/3/tv/popular?api_key=4125fc066b3dd19a65a59c526e0747c5&language=en-US&page=1");
    }
}