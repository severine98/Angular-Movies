import { Injectable } from '@angular/core';
import { IMovie, movieArray } from "src/assets/movies";


@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor() { }

  getMovieOldToNew() {
    movieArray.sort((a: IMovie, b: IMovie) => {
      return a.year - b.year;
    })
    return movieArray;
  }

  getMovieNewToOld() {
    movieArray.sort((a: IMovie, b: IMovie) => {
      return b.year - a.year;
    })
    return movieArray;
  }

  getMovieAToZ() {
    movieArray.sort((a: IMovie, b: IMovie) => {
      return a.title.localeCompare(b.title);
    });
    return movieArray;
  }

  getMovieZToA() {
    movieArray.sort((a: IMovie, b: IMovie) => {
      return b.title.localeCompare(a.title);
    });
    return movieArray;
  }
}

