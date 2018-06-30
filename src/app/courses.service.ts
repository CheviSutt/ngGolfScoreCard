import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private http: HttpClient) { }

  getCourse(){
    return this.http.get(`https://uxcobra.com/golfapi/courses.txt`);
    }
}
