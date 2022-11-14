import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  getBirds(): Observable<any> {
    return this.http.get('https://gpzrlwl5yb.execute-api.us-east-1.amazonaws.com/dev/get-birds');
  }

  setBirds(data: any): Observable<any> {
    return this.http.post('https://gpzrlwl5yb.execute-api.us-east-1.amazonaws.com/dev/set-birds', data);
  }

}
