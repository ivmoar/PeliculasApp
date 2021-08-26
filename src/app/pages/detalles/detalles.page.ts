import { Component, OnInit } from '@angular/core';
import { PeliculaService } from '../../servicios/pelicula.service';
import { ActivatedRoute } from '@angular/router';
import { IPeliculas } from 'src/app/modelos/IPeliculas.interface';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.page.html',
  styleUrls: ['./detalles.page.scss'],
})
export class DetallesPage implements OnInit {
  content: IPeliculas= null;

  constructor(private peliculaService: PeliculaService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.peliculaService.getDetails(id).subscribe(result => this.content = result);
    console.log(this.content);
  }

}
