import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { MoviesPageComponent } from './movies-page/movies-page.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { CetegoryPageComponent } from './cetegory-page/cetegory-page.component';



@NgModule({
  declarations: [
    HomePageComponent,
    MoviesPageComponent,
    SearchPageComponent,
    CetegoryPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
