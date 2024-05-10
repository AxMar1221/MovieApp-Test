import { Component, OnInit, HostListener, OnDestroy  } from '@angular/core';
import { Movie } from 'src/app/interfaces/cartelera';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-popularity-page',
  templateUrl: './popularity-page.component.html',
  styleUrls: ['./popularity-page.component.css']
})
export class PopularityPageComponent  implements OnInit, OnDestroy {
  public movies: Movie[] = [];

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

  constructor(private moviesService: MoviesService){
    this.moviesService.mostPopular().subscribe( movies => {
      this.movies = movies;
    })
  }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
    this.moviesService.resetPage();
  }
}
