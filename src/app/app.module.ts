import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {MovieCardComponent} from "./component/movie-card/movie-card.component";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MovieListComponent } from './component/movie-list/movie-list.component';
import {MovieService} from "./movie.service";

@NgModule({
  declarations: [
    AppComponent,
    MovieCardComponent,
    MovieListComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }