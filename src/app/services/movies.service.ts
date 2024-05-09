import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cartelera } from '../interfaces/cartelera';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor( private http: HttpClient ) { }

  getCartelera() : Observable<Cartelera> {

    return this.http.get<Cartelera>('https://api.themoviedb.org/3/movie/popular?api_key=f90a0cc33a6670b25f3df993c479f755&language=es-ES&page=1');

  }
}
