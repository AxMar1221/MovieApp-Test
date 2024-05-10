import { Component, HostListener } from '@angular/core';
import { Movie } from 'src/app/interfaces/cartelera';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent {
  public movies: Movie[] = [];
  public moviesSlides: Movie[] = [];

  @HostListener('window:scroll',['$event'])
  onScroll(){
    const pos = (document.documentElement.scrollTop || document.body.scrollTop) + 1300;
    const max = (document.documentElement.scrollHeight||document.body.scrollHeight);

    if ( pos > max ){
      if ( this.moviesService.loading ) {return }
      this.moviesService.getCartelera().subscribe(movies =>{
        this.movies.push(...movies);
      })
    }
  }

  constructor(private moviesService: MoviesService) {
    this.moviesService.getCartelera().subscribe( movies => {
      this.movies = movies;
      this.moviesSlides = [...movies];
    });
  }
}
