import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShortUrlService {

  URL = 'https://api-ssl.bitly.com/v4/shorten';

  constructor(private http: HttpClient) { }

  getUrlShort(urlname: string): Observable<any>{

    // const tokenHeader = new HttpHeaders({ Authorization: 'Bearer ' + this.token });

    const body = {
      long_url: urlname
    }
    // return this.http.post(this.URL, body, { headers: tokenHeader} );
    return this.http.post(this.URL, body);

  }
}
