import { Component, OnInit, Input } from '@angular/core';
import { IMovie } from 'src/assets/movies';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {
  @Input() movie: IMovie;
  altText: string;

  constructor() { }

  ngOnInit(): void {
    this.altText = `A poster for the movie ${this.movie.title}`;
  } 

}