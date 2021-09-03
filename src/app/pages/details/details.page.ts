import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../service/movie.service';
import { ActivatedRoute } from '@angular/router';
import { Movies } from '../../models/movies.interface';
@Component({
  selector: 'app-detalles',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  movie: Movies;

  constructor(private movieService: MovieService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.movieService.getDetails(id).subscribe((result) => {
      this.movie = result;
    });
  }

}
