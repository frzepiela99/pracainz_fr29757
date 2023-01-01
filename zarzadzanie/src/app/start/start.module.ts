import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartComponent } from './start.component';
import { MatIconModule } from '@angular/material/icon';




@NgModule({
  declarations: [
    StartComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ]
})
export class StartModule { }
