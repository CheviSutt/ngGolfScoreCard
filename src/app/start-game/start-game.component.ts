import { Component, OnInit } from '@angular/core';
import { CoursesService } from "../courses.service";

@Component({
  selector: 'app-start-game',
  templateUrl: './start-game.component.html',
  styleUrls: ['./start-game.component.css']
})
export class StartGameComponent implements OnInit {
  courses: Courses[];

  constructor(private coursesService: CoursesService) { }

  ngOnInit() {

  }

  selCourse(){
  }
}
