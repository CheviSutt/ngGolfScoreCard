import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/internal/operators';
import {BehaviorSubject, Observable} from 'rxjs/index';

@Injectable({
  providedIn: 'root'
})
export class HolesService {
  courseId: number;

  private players = new BehaviorSubject<any>([]);
  player = this.players.asObservable();
  constructor(private http: HttpClient) { }

  getTee(): Observable<any> {
    return this.http.get(`https://uxcobra.com/golfapi/course` + this.courseId + `.txt`);
  }

  changePlayer(player) {
    this.players.next(player);
  }
}
