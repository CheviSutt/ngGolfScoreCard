import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../courses.service';
import { Courses } from '../Domains/courses';
import { TeeSelect } from '../Domains/teeSelect';

@Component({
  selector: 'app-start-game',
  templateUrl: './start-game.component.html',
  styleUrls: ['./start-game.component.css']
})
export class StartGameComponent implements OnInit {
  courses: Courses[];
  // teeDifficulty: TeeSelect[];

  constructor(private coursesService: CoursesService) { }

  ngOnInit() {
    // this.coursesService.getCourse().subscribe(result => {
    //   this.courses = result.courses;
    //   console.log(this.courses);
    // });
  }

  selCourse() {
    //return this.courses;
    this.coursesService.getCourse().subscribe(result => {
      console.log(result.courses);
      this.courses = result.courses;
    });
  }

  // selTee(){
  //   this.coursesService.getTee().subscribe(result => {
  //     console.log(result.teeDifficulty);
  //     this.teeDifficulty = result.teeDifficulty;
  //   });
  // }
}
