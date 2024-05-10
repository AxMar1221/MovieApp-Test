import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/interfaces/cartelera';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-movies-poster-grid',
  templateUrl: './movies-poster-grid.component.html',
  styleUrls: ['./movies-poster-grid.component.css']
})
export class MoviesPosterGridComponent implements OnInit {
  @Input() movies: Movie[];

  constructor( private router: Router) {
    this.movies = [];
  }

  ngOnInit(): void {
  }

  likeMovie(movie: Movie) {
    movie.isFavorite = !movie.isFavorite;
  }

  onMovieClick( movie: Movie ){
    this.router.navigate(['/movie', movie.id])
  }
}
