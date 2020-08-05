import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/movie.service';

@Component({
  selector: 'app-filter-bar',
  styleUrls: ['./filter-bar.component.scss'],
  template: `
  <section class="filter-bar">
  <p>Sort:</p>
  <ul>
    <li onclick= this._movieService.getMovieZToA()> 
      <a href="#" onclick= 'this._movieService.getMovieZToA()'>Alphabetically (A - Z)</a>
    </li>
    <li>Alphabetically (Z - A)</li>
    <li>Release date (Old - New)</li>
    <li>Release date (New - Old)</li>
  </ul>
</section>
`
})
export class FilterBarComponent implements OnInit {

  constructor(private _movieService: MovieService) { }

  ngOnInit(): void {
  }

}
