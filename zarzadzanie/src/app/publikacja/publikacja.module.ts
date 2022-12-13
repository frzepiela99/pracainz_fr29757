import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublikacjaComponent } from './publikacja.component';
import { DodajpublikacjeModule } from './dodajpublikacje/dodajpublikacje.module';
import {MatTableModule} from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [
    PublikacjaComponent
  ],
  imports: [
    CommonModule,
    DodajpublikacjeModule,
    MatTableModule, 
    MatCardModule
  ],
  exports: [PublikacjaComponent]
})
export class PublikacjaModule { }
