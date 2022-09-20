import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class HomeService {
  // url  = 'https://api.themoviedb.org/3/movie/popular?api_key=4e039b4ce58370b07f5af5036fee8c65&page=1';
  constructor(private http:  HttpClient) { }
  //
  // getMovie(){
  //   return this.http.get(this.url);
  // }

  getMovie(id : any){
    return this.http.get('https://api.themoviedb.org/3/movie/popular?api_key=4e039b4ce58370b07f5af5036fee8c65&page=' + id);
  }
}



