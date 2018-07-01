import { Component, OnInit } from '@angular/core';
import { CoursesService } from "../courses.service";
import { Courses } from "../Domains/courses";

@Component({
  selector: 'app-start-game',
  templateUrl: './start-game.component.html',
  styleUrls: ['./start-game.component.css']
})
export class StartGameComponent implements OnInit {
  courses: Courses[];

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
}
