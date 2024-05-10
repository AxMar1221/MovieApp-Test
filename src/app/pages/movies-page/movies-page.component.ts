import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Details } from 'src/app/interfaces/movieDetails';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movies-page',
  templateUrl: './movies-page.component.html',
  styleUrls: ['./movies-page.component.css']
})
export class MoviesPageComponent implements OnInit{

  public movie!: Details;

  constructor( private activatedRoute: ActivatedRoute,
               private moviesService: MoviesService,
               private location: Location ){

  }

  ngOnInit(): void {
      const {id} = this.activatedRoute.snapshot.params;
      this.moviesService.getMovieDetails( id ).subscribe( movie => {
        this.movie = movie;
      })
  }

  onBack(){
    this.location.back();
  }

}
