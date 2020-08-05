import { Injectable } from '@angular/core';
import {IMovie, movieArray} from "src/assets/movies"; 


@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor() { }

  getMovie(){
    return movieArray;
  }
}
