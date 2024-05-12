import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/interfaces/cartelera';

@Component({
  selector: 'app-movies-popular-grid',
  templateUrl: './movies-popular-grid.component.html',
  styleUrls: ['./movies-popular-grid.component.css']
})

export class MoviesPopularGridComponent implements OnInit {
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

