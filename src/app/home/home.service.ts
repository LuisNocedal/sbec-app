import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  getBirds(): Observable<any> {
    return this.http.get('http://localhost:3000/get-birds');
  }

  setBirds(data: any): Observable<any> {
    return this.http.post('http://localhost:3000/set-birds', data);
  }

}
