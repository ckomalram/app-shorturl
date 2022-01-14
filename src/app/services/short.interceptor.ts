import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ShortInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

   const TOKEN = '8fc9669e1286c8ebb39f2d61f050e8e400983afa';

   request = request.clone({ setHeaders: { Authorization: 'Bearer ' + TOKEN } })
    return next.handle(request);
  }
}
