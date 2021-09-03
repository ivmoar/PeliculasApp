import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieService} from '../../service/movie.service';
import { Movies } from '../../models/movies.interface';

@Component({
  selector: 'app-peliculas',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage {
  movies: Observable<Movies>;
  term = "";
  type = "";

  constructor(private movieService: MovieService) { }

  searchChanged(){
    this.movies = this.movieService.searchMovies(this.term, this.type);
  }

}
