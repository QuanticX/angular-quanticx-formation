import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpService {

  constructor(private http: HttpClient) { }

  httpHeaders = new HttpHeaders({
     'Content-Type' : 'application/json',
     'Cache-Control': 'no-cache'
  });
  options = {
     headers: this.httpHeaders
  }; 

  returnGetData(): Observable<any>{
    return this.http.get('https://reqres.in/api/users?page=2')
  }

  sendPostData(data: any): Observable<any>{
    return this.http.post('https://reqres.in/api/users',JSON.stringify(data), this.options);
  }

}