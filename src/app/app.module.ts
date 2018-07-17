import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // materialDesign
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { MaterialModule } from './material.module';

import { AppComponent } from './app.component';
import { StartGameComponent } from './start-game/start-game.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing-module';
import { SelectCourseComponent } from './select-course/select-course.component';
import { SelectTeeComponent } from './select-tee/select-tee.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NameConfPipe } from './name-conf.pipe';

import { environments } from '../environments/environments';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { LoginComponent } from './login/login.component';
import { AuthService } from './services/auth.service';
import { CreateUserService } from './services/create-user.service';



@NgModule({
  declarations: [
    AppComponent,
    StartGameComponent,
    HomeComponent,
    SelectCourseComponent,
    SelectTeeComponent,
    NameConfPipe,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environments.firebase),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    MaterialModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      // { path: '', component: HomeComponent },
      { path: 'home', component: HomeComponent },
      { path:  'login', component: LoginComponent },
      { path:  'select-course', component: SelectCourseComponent },
      { path:  'select-tee', component: SelectTeeComponent },
      { path:  'start-game', component: StartGameComponent },
    ])
  ],
  providers: [
    AuthService,
    CreateUserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
