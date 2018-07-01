import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";//materialDesign
import {RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";


import { MaterialModule } from './material.module';

import { AppComponent } from './app.component';
import { StartGameComponent } from './start-game/start-game.component';
import { HomeComponent } from './home/home.component';
import {AppRoutingModule} from "./app-routing-module";
import { SelectCourseComponent } from './select-course/select-course.component';
import { SelectTeeComponent } from './select-tee/select-tee.component';



@NgModule({
  declarations: [
    AppComponent,
    StartGameComponent,
    HomeComponent,
    SelectCourseComponent,
    SelectTeeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
