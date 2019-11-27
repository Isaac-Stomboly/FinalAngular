import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { HttpClient } from '@angular/common/http'

import { AppComponent } from './app.component';
import { TVList } from './tvlist/tvlist.component';

@NgModule({
  declarations: [
    AppComponent, TVList
  ],
  imports: [
    BrowserModule, RouterModule, HttpClient
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
