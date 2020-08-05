import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {MovieCardComponent} from "./component/movie-card/movie-card.component";
import {NavBarComponent} from "./component/nav-bar/nav-bar.component";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MovieListComponent } from './component/movie-list/movie-list.component';
import { FilterBarComponent } from './component/filter-bar/filter-bar.component';
import {MovieService} from "./movie.service";

@NgModule({
  declarations: [
    AppComponent,
    MovieCardComponent,
    NavBarComponent,
    MovieListComponent,
    FilterBarComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }