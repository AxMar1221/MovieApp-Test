import { Component } from '@angular/core';
import { Movie } from 'src/app/interfaces/cartelera';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent {
  public movies: Movie[] = [];

  constructor(private moviesService: MoviesService) {
    this.moviesService.getCartelera().subscribe((resp) => {
      this.movies = resp.results;
    });
  }
}
