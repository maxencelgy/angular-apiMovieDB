import {filter} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  listMovies: any;


  constructor(private route: ActivatedRoute,private movieS: HomeService) {
  }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    console.log(id);
    this.movieS.getMovie(id).subscribe((data: any) => {
      this.listMovies = data.results.sort((a: any, b: any) => {
        return <any>new Date(b.release_date) - <any>new Date(a.release_date);
      });
      console.log(this.listMovies)

    })
  }

  get sortByLastModifiedDesc() {
    return this.listMovies = this.listMovies.sort((a: any, b: any) => {
      return <any>new Date(b.release_date) - <any>new Date(a.release_date);
    });
  }

  get sortByLastModifiedAsend() {
    return this.listMovies.sort((a: any, b: any) => {
      return <any>new Date(a.release_date) - <any>new Date(b.release_date);
    });
  }
  get filtreByNoteAsc() {
    return this.listMovies.sort((a: any, b: any) => {
      return a.vote_average - b.vote_average;
    });
  }
  get filtreByNoteDsc() {
    return this.listMovies.sort((a: any, b: any) => {
      return b.vote_average - a.vote_average;
    });
  }



}

import {Component, OnInit} from '@angular/core';

import {HomeService} from "../home.service";
import {ActivatedRoute} from "@angular/router";
