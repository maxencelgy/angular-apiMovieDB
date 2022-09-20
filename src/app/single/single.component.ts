import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {HomeService} from "../home.service";
import {SingleService} from "../single.service";
@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.scss']
})
export class SingleComponent implements OnInit {
  movie: any;
  constructor(private route: ActivatedRoute, private singleS: SingleService) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    // console.log(id)

   this.singleS.getMovieById(id).subscribe((data : any) => {
     this.movie = data;
     console.log(this.movie)
    });



  }

}
