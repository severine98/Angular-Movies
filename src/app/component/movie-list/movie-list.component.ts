import { Component, OnInit } from '@angular/core';
import {IMovie, movieArray} from "src/assets/movies"; 
import { MovieService } from 'src/app/movie.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  movieArray: IMovie[] = [];

  constructor(private _movieService: MovieService) { }

  ngOnInit(): void {
    this.movieArray = this._movieService.getMovieZToA();
  }

}
