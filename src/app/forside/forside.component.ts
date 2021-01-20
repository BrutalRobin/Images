import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-forside',
  templateUrl: './forside.component.html',
  styleUrls: ['./forside.component.scss']
})
export class ForsideComponent implements OnInit {
  public searchedValue: string;
  images: any;
  imagearray: any;

  constructor(private http: HttpClient,) { }

  ngOnInit(): void {
  }
  Search(){
    this.http
    .get(`https://api.giphy.com/v1/gifs/search?&q=${this.searchedValue}&limit=100&api_key=1bkG7ky5cmw5SLyvNfElcR1iYVzs38Zq&rating=g`)
    .subscribe(data => {
      this.images = data;
      this.imagearray = this.images.data
      console.log(this.images)
    });

  }


}
