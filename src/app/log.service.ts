import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class LogService implements HttpInterceptor {
   intercept(request: HttpRequest<any>, next: HttpHandler):   Observable<HttpEvent<any>> {
       // All HTTP requests are going to go through this method
    console.log('INTERCEPTOR');
    return next.handle(request);
   }
}