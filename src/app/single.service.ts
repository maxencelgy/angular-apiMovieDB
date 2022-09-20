import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class SingleService {

   url  = '';
  constructor(private http: HttpClient) { }

  getMovieById(id : any){
    return this.http.get('https://api.themoviedb.org/3/movie/' + id + '?api_key=4e039b4ce58370b07f5af5036fee8c65');
  }
}

