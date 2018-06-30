import { NgModule } from '@angular/core';

import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule
} from "@angular/material";


@NgModule({
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule
    ],

  exports:[
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule
  ]
})

export class MaterialModule{}
