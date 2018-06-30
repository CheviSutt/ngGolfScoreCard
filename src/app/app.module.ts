import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";//materialDesign
import {RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";


import { MaterialModule } from './material.module';

import { AppComponent } from './app.component';
import { StartGameComponent } from './start-game/start-game.component';



@NgModule({
  declarations: [
    AppComponent,
    StartGameComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: "start-game", component: StartGameComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
