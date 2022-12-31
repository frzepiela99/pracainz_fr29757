import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Dodajplik1Component } from './dodajplik1.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    Dodajplik1Component
  ],
  imports: [
    CommonModule,
    MatProgressBarModule,
    HttpClientModule,
  ]
})
export class Dodajplik1Module { }
