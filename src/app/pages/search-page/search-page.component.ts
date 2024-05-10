import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit{

  constructor( private activateRoute: ActivatedRoute,
               private moviesService: MoviesService){

  }
  ngOnInit(): void {
    this.activateRoute.params.subscribe( params => {
      this.moviesService.searchMovie( params['text']).subscribe( movies => {
        console.log(movies)
      })
    });
  }

}
