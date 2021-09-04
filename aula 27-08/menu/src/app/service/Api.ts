import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class Post{
  serve: string = 'http://localhost';
  constructor(private http: HttpClient ){

  }
}
