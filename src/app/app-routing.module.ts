import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MoviesPageComponent } from './pages/movies-page/movies-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { PopularityPageComponent } from './pages/popularity-page/popularity-page.component';
import { VotePageComponent } from './pages/vote-page/vote-page.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'movie/:id', component: MoviesPageComponent },
  { path: 'search/:text', component: SearchPageComponent },
  { path: 'popular', component: PopularityPageComponent },
  { path: 'top_rated', component: VotePageComponent },
  { path: '**', redirectTo: '/home' },
];
@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
