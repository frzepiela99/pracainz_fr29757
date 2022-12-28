import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { UsunPublikacjeComponent } from './usun-publikacje.component';



@NgModule({
  declarations: [
    UsunPublikacjeComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],

  exports: [
    UsunPublikacjeComponent
  ]
})
export class UsunPublikacjeModule { }
