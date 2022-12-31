import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DodajPlikComponent } from './dodaj-plik.component';
import { DropzoneArea } from 'material-ui-dropzone';
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { HttpClientModule } from '@angular/common/http';







@NgModule({
  declarations: [
    DodajPlikComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatProgressBarModule,
    HttpClientModule
  ]
})
export class DodajPlikModule { }
