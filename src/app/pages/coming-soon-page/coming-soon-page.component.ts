import { Component, OnDestroy, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/cartelera';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-coming-soon-page',
  templateUrl: './coming-soon-page.component.html',
  styleUrls: ['./coming-soon-page.component.css']
})
export class ComingSoonPageComponent implements OnInit, OnDestroy{
  public movies: Movie[] = [];
  public moviesSlides: Movie[] = [];

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.moviesService.upComing().subscribe( movies => {
      this.movies = movies;
      this.moviesSlides = [...movies];
    });

  }

  ngOnDestroy(): void {
    this.moviesService.resetPage();
  }
}