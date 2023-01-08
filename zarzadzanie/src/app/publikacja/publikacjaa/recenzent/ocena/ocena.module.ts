import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OcenaComponent } from './ocena.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {ScrollingModule} from '@angular/cdk/scrolling';





@NgModule({
  declarations: [
    OcenaComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatCheckboxModule,
    MatRadioModule,
    ScrollingModule
  ]
})
export class OcenaModule { }
