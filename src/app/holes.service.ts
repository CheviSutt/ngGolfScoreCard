import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/internal/operators';
import { Observable } from 'rxjs/index';

@Injectable({
  providedIn: 'root'
})
export class HolesService {
  courseId: number;

  constructor(private http: HttpClient) { }

  getTee(): Observable<any> {
    return this.http.get(`https://uxcobra.com/golfapi/course` + this.courseId + `.txt`);
  }
}
