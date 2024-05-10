import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Cartelera, Movie } from '../interfaces/cartelera';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private baseUrl: string = 'https://api.themoviedb.org/3';
  private moviePage = 1
  public loading: boolean = false;

  constructor( private http: HttpClient ) { }

  get params() {
    return {
      api_key: 'f90a0cc33a6670b25f3df993c479f755',
      language: 'es-ES',
      page: this.moviePage.toString()
    }
  }

  getCartelera() : Observable<Movie[]> {

    if ( this.loading ) {
      return of([]);
    }

    this.loading = true;
    return this.http.get<Cartelera>(`${this.baseUrl}/movie/now_playing`,{
      params: this.params
    }).pipe(
      map( (resp) => resp.results ),
      tap( () => {
        this.moviePage += 1;
        this.loading = false;
      })
    )
  }

  searchMovie(text: string):Observable<Movie[]>{

    const params = {...this.params, page: '1', query: text}
    //https://api.themoviedb.org/3/search/movie
    return this.http.get<Cartelera>(`${this.baseUrl}/search/movie`, {
      params
    }).pipe(
      map( resp => resp.results )
    )
  }
}


