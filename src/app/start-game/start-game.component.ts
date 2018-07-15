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
  selectedCourse: string;
  selectedTeeType: string;
  courseData: Array<any>;
  holesArray: Array<any> = [];
  teeNumber: number;

  numPlayers: Array<any>; // 07/14/18
  selectedPlayer: string; // 07/14/18

  constructor(
    private coursesService: CoursesService,
    private holesService: HolesService
  ) {
    this.coursesService.getCourse().subscribe(result => {
      console.log(result.courses);
      this.courses = result.courses;
    });
  //   this.holesService.getTee().subscribe(result => {
  //     console.log(result.data.holes[0].teeType);
  //     console.log(result.data.holes);
  //     console.log(result.data.holes[0].teeBoxes);
  //     this.teeDifficulty = result.data.holes[0].teeBoxes;
  //   });
   }

  ngOnInit() {
    // this.coursesService.getCourse().subscribe(result => {
    //   this.courses = result.courses;
    //   console.log(this.courses);
    // });
  }

  selCourse(c) {
    // this.coursesService.getCourse().subscribe(result => {
    //   console.log(result.courses);
    //   this.courses = result.courses;
    // });
    this.selectedCourse = c; // c is the value of the selected course
    console.log(c.name);
    console.log(c.id);
    this.holesService.courseId = c.id;

    this.holesService.getTee().subscribe(result => {
      // console.log(result.data.holes[0].teeType);
      // console.log(result.data.holes[0].teeBoxes);
      this.teeDifficulty = result.data.holes[0].teeBoxes;
      console.log(result.data.holes);
      this.courseData = result.data.holes;
    });
    }

  selTee(t) {
    // this.holesService.getTee().subscribe(result => {
    //   console.log(result.data.holes[0].teeType);
    //   console.log(result.data.holes);
    //   console.log(result.data.holes[0].teeBoxes);
    //   this.teeDifficulty = result.data.holes[0].teeBoxes;
    // });
    console.log(t.teeType);
    this.selectedTeeType = t.teeType;
    this.teeNumber = t.teeTypeId;
    console.log(t.teeTypeId);
    for (let i = 0; i < this.courseData.length; i++) {
      this.holesArray.push({
       'holes': this.courseData[i].hole,
       'yards': this.courseData[i].teeBoxes[t.teeTypeId - 1].yards,
       'par': this.courseData[i].teeBoxes[t.teeTypeId - 1].par,
       'hcp': this.courseData[i].teeBoxes[t.teeTypeId - 1].hcp
    });
    }

    // buildCard() {
    //   for (let p = 1; p <= numPlayers; p++) {
    //     this.numPlayers.push({
    //
    //     });
    //     // for (let h = 0; h < selcourse.data.holes.length; h++){
    //     //
    //     // }
    //       }
    // }

  }

  addPlaya(p) {
    this.selectedPlayer = p.numPlayers;
  }
}

