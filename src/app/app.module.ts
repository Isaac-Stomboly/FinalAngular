import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TVList } from './tvlist/tvlist.component';
import { MovieList } from './movielist/movielist.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent, TVList, MovieList, HomeComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, RouterModule.forRoot([
      {path: 'movies', component: MovieList},
      {path: 'tv', component: TVList},
      {path: 'home', component: HomeComponent},
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: '**', redirectTo: 'home', pathMatch: 'full'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
