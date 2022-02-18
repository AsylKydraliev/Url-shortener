import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Link } from './link.model';

@Injectable({
  providedIn: 'root'
})

export class HttpService{
  constructor(private http: HttpClient) {}

  onPost(shortUrl: Link){
    return this.http.post('http://localhost:8000/links', shortUrl);
  };

  onGet(shortenUrl: string){
    return this.http.get('http://localhost:8000/links' + shortenUrl);
  };
}
