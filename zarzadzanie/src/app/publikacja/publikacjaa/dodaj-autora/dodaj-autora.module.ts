import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DodajAutoraComponent } from './dodaj-autora.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DodajAutoraComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],

  exports: [
    DodajAutoraComponent
  ]
})
export class DodajAutoraModule { }
