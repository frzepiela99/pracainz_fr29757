import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublikacjaaComponent } from './publikacjaa.component';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    PublikacjaaComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
  ]
})
export class PublikacjaaModule { }
