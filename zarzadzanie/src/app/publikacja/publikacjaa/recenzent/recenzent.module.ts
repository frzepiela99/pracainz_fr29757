import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecenzentComponent } from './recenzent.component';
import {MatTableModule} from '@angular/material/table';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatListModule} from '@angular/material/list';




@NgModule({
  declarations: [
    RecenzentComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatListModule,
  ]
})
export class RecenzentModule { }
