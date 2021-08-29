import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { IPeliculas } from '../modelos/IPeliculas.interface';

@Injectable({
  providedIn: 'root'
})
export class PeliculaService {
  private url: string = '';
  private apiKey: string = 'abfa4af1';
  //abfa4af1

  constructor(private http: HttpClient) { }

  searchMovies(title:string, type:string){
    this.url = `https://www.omdbapi.com/?s=${encodeURI(title)}&type=${type}&apikey=${this.apiKey}`;
    console.log(this.url);
    return this.http.get<IPeliculas>(this.url).pipe(map((results) => results['Search']));
  }

  getDetails(id:string){

    const url = `https://www.omdbapi.com/?i=${id}$plot=full&apikey=${this.apiKey}`
    console.log(`URL ${url}`)
    return this.http.get<IPeliculas>(`https://www.omdbapi.com/?i=${id}&plot=full&apikey=${this.apiKey}`);
  }
}
