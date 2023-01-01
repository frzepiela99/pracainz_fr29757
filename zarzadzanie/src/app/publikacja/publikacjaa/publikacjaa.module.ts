import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublikacjaaComponent } from './publikacjaa.component';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { DodajAutoraModule } from './dodaj-autora/dodaj-autora.module';
import { MatDialogModule } from '@angular/material/dialog';
import { ZmienTytulModule } from './zmien-tytul/zmien-tytul.module';
import { ZmienStreszczenieModule } from './zmien-streszczenie/zmien-streszczenie.module';
import { UsunPublikacjeModule } from './usun-publikacje/usun-publikacje.module';
import { DodajPlikModule } from './dodaj-plik/dodaj-plik.module';
import { Dodajplik1Module } from './dodajplik1/dodajplik1.module';
import { HttpClientModule } from '@angular/common/http';



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
    DodajAutoraModule,
    MatDialogModule,
    ZmienTytulModule,
    ZmienStreszczenieModule,
    UsunPublikacjeModule,
    DodajPlikModule,
    HttpClientModule
    
  ]
})
export class PublikacjaaModule { }
