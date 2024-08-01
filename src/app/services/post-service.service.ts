import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const HOME_URL = 'http://localhost:8080/'

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {

  constructor(private http: HttpClient) { }

  createNewBlog(data:any): Observable<any> { 
    return this.http.post(HOME_URL + `api/blogs`, data);
  }
}
