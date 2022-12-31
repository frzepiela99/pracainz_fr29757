import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { Publikacja, PublikacjaaGQL } from 'src/generated-types';
import { MatDialog } from '@angular/material/dialog';
import { DodajAutoraComponent } from './dodaj-autora/dodaj-autora.component';
import { ZmienTytulComponent } from './zmien-tytul/zmien-tytul.component';
import { ZmienStreszczenieComponent } from './zmien-streszczenie/zmien-streszczenie.component';
import { UsunPublikacjeComponent } from './usun-publikacje/usun-publikacje.component';
import { DodajPlikComponent } from './dodaj-plik/dodaj-plik.component';
import { Dodajplik1Component } from './dodajplik1/dodajplik1.component';
import { DodajPlikModule } from './dodaj-plik/dodaj-plik.module';

@Component({
  selector: 'app-publikacjaa',
  templateUrl: './publikacjaa.component.html',
  styleUrls: ['./publikacjaa.component.scss']
})
export class PublikacjaaComponent implements OnInit {
  publikacjaa: Publikacja;
  constructor(
    private readonly route: ActivatedRoute,
    private readonly publikacjaaGql: PublikacjaaGQL,
    private readonly dialog: MatDialog,
  ) { }


  ngOnInit(): void {
    this.route.params
      .pipe(
        switchMap((params) => {
          return this.publikacjaaGql.watch({ _id: params['id'] }).valueChanges;
        }),
        // switchMap((result) => {
        //   this.bookmark = result.data.bookmark;
        //   return this.linksGql.watch({ urls: result.data.bookmark.links })
        //     .valueChanges;
        // })
      )
      .subscribe((result) => {
        this.publikacjaa = result.data.publikacjaa
      });
    // .subscribe((result) => {
    //   this.isLoading = result.loading;
    //   this.links = result.data.links;
    // });
  }

  editAutor() {
    this.dialog.open(DodajAutoraComponent, {
      data: { publikacjaa: this.publikacjaa },
    });
  }

  editTytul() {
    this.dialog.open(ZmienTytulComponent, {
      data: { publikacjaa: this.publikacjaa },
    });
  }

  editStreszczenie() {
    this.dialog.open(ZmienStreszczenieComponent, {
      data: { publikacjaa: this.publikacjaa },
    });
  }

  deletePublikacja() {
    this.dialog.open(UsunPublikacjeComponent, {
      data: { publikacjaa: this.publikacjaa },
    });
  }

  dodajPlik() {
    this.dialog.open(DodajPlikComponent, {
      data: { publikacjaId: this.publikacjaa._id },
    });
  }
  dodajPlik1() {
    this.dialog.open(Dodajplik1Component, {
      data: { publikacjaa: this.publikacjaa },
    });
  }
}
