import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service'

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class APIComponent implements OnInit {

  constructor(private http: HttpService) { }

  ngOnInit() {
  }

  callApi() {
    this.http.returnGetData()
      .subscribe(data => {
        console.log(data);
      })
    }

}