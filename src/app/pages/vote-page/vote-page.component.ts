import { Component, OnInit, HostListener  } from '@angular/core';
import { Movie } from 'src/app/interfaces/cartelera';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-vote-page',
  templateUrl: './vote-page.component.html',
  styleUrls: ['./vote-page.component.css']
})
export class VotePageComponent implements OnInit {
  public movies: Movie[] = [];

  @HostListener('window:scroll',['$event'])
  onScroll(){
    const pos = (document.documentElement.scrollTop || document.body.scrollTop) + 1300;
    const max = (document.documentElement.scrollHeight||document.body.scrollHeight);

    if ( pos > max ){
      this.moviesService.getCartelera().subscribe(movies =>{
        this.movies.push(...movies);
      })
    }
  }

  constructor(private moviesService: MoviesService){
    this.moviesService.topMovie().subscribe( movies => {
      this.movies = movies;
    })
  }

  ngOnInit(): void {

  }
}
