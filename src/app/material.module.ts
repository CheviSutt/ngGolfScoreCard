import { NgModule } from '@angular/core';

import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatMenuModule
} from "@angular/material";


@NgModule({
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatMenuModule
    ],

  exports:[
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatMenuModule
  ]
})

export class MaterialModule{}
