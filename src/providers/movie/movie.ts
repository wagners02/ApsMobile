import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the MovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MovieProvider {
  public baseApiPach = "https://api.themoviedb.org/3";
  public getApiKey = "cfe414acbe9d6f5890f8fc52cf5a8a0b";
  constructor(public http: HttpClient) {
  }
  getLatesMovies(page = 1) {

    return this.http.get(`${this.baseApiPach}/movie/popular?page=${page}&api_key=${this.getApiKey}`);

  }
  // getMoviesDetails(filmeid){

  //   return this.http.get(`${this.baseApiPach}/movie/${filmeid}?api_key=${this.getApiKey}`);

  // }

}
