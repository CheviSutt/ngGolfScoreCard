import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../courses.service';
import { Courses } from '../Domains/courses';
import { Tee } from '../Domains/tee';
import { HolesService } from '../holes.service';

@Component({
  selector: 'app-start-game',
  templateUrl: './start-game.component.html',
  styleUrls: ['./start-game.component.css']
})
export class StartGameComponent implements OnInit {
  courses: Courses[];
  teeDifficulty: Tee[];
  // playaTee: [''];

  constructor(
    private coursesService: CoursesService,
    private holesService: HolesService
  ) { }

  ngOnInit() {
    // this.coursesService.getCourse().subscribe(result => {
    //   this.courses = result.courses;
    //   console.log(this.courses);
    // });
  }

  selCourse() {
    // return this.courses;
    this.coursesService.getCourse().subscribe(result => {
      console.log(result.courses);
      this.courses = result.courses;
    });
  }

  selTee() {
    this.holesService.getTee().subscribe(result => {
      console.log(result.data.holes);
      this.teeDifficulty = result.data.holes;
    });
  }
}

