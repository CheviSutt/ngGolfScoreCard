import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {StartGameComponent} from "./start-game/start-game.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'start-game',
    component: StartGameComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
