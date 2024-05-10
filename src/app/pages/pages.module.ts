import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { MoviesPageComponent } from './movies-page/movies-page.component';
import { PopularityPageComponent } from './popularity-page/popularity-page.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { VotePageComponent } from './vote-page/vote-page.component';
import { ComponentsModule } from '../components/components.module';
import { PipesModule } from '../pipes/pipes.module';
import { ComingSoonPageComponent } from './coming-soon-page/coming-soon-page.component';

@NgModule({
  declarations: [
    HomePageComponent,
    MoviesPageComponent,
    PopularityPageComponent,
    SearchPageComponent,
    VotePageComponent,
    ComingSoonPageComponent,
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    PipesModule
  ]
})
export class PagesModule { }
