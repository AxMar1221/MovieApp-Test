import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/interfaces/cartelera';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit, OnDestroy{

  public text: string = "";
  public movies: Movie[] = [];

  constructor( private activateRoute: ActivatedRoute,
               private moviesService: MoviesService){

  }
  ngOnInit(): void {
    this.activateRoute.params.subscribe( params => {
      this.text = params['text'];

      this.moviesService.searchMovie( params['text']).subscribe( movies => {
        this.movies = movies;
      })
    });
  }

  ngOnDestroy(): void {
    this.moviesService.resetPage();
  }
}
