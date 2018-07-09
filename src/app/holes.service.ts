import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/internal/operators';
import { Observable } from 'rxjs/index';

@Injectable({
  providedIn: 'root'
})
export class HolesService {

  constructor(private http: HttpClient) { }

  // const playaTee = this.http.get(`https://uxcobra.com/golfapi/course11819.txt`);

  getTee(): Observable<any> {
    return this.http.get(`https://uxcobra.com/golfapi/course11819.txt`);
  }
}
