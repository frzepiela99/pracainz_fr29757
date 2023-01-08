import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs';
import { Publikacja, PublikacjaaGQL, ZalogowanyUserGQL } from 'src/generated-types';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DodajAutoraComponent } from './dodaj-autora/dodaj-autora.component';
import { ZmienTytulComponent } from './zmien-tytul/zmien-tytul.component';
import { ZmienStreszczenieComponent } from './zmien-streszczenie/zmien-streszczenie.component';
import { UsunPublikacjeComponent } from './usun-publikacje/usun-publikacje.component';
import { DodajPlikComponent } from './dodaj-plik/dodaj-plik.component';
import { Dodajplik1Component } from './dodajplik1/dodajplik1.component';
import { DodajPlikModule } from './dodaj-plik/dodaj-plik.module';
import { HttpClient } from '@angular/common/http';
import * as fileSaver from 'file-saver';
import { UsunplikComponent } from './usunplik/usunplik.component';
import { RecenzentComponent } from './recenzent/recenzent.component';
import { RecenzowanieComponent } from './recenzent/recenzowanie/recenzowanie.component';
import { OcenaComponent } from './recenzent/ocena/ocena.component';

@Component({
  selector: 'app-publikacjaa',
  templateUrl: './publikacjaa.component.html',
  styleUrls: ['./publikacjaa.component.scss']
})
export class PublikacjaaComponent implements OnInit {
  publikacjaa: Publikacja;
  pliki: any;
  user: any;
  isOwner: boolean;
  isRecenzent: boolean;
  ocena: any;

  constructor(
    // @Inject(MAT_DIALOG_DATA) public data: {plikId: string},
    private readonly route: ActivatedRoute,
    private readonly publikacjaaGql: PublikacjaaGQL,
    private readonly zalogowanyUserGql: ZalogowanyUserGQL,
    private readonly dialog: MatDialog,
    private httpClient: HttpClient
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
      .subscribe(async (result) => {
        this.publikacjaa = result.data.publikacjaa;
        this.pliki = await this.httpClient.get(`http://localhost:3000/files/${this.publikacjaa._id}`).toPromise();
        this.zalogowanyUserGql
        .watch()
        .valueChanges.pipe(map((result) => result.data.zalogowanyUser)).subscribe(async (res) => {
          this.user = res;
          this.isOwner = res._id === result.data.publikacjaa.userId;
          const recenzenci: any = await this.httpClient.get(`http://localhost:3000/recenzent/${this.publikacjaa._id}`).toPromise()
          this.isRecenzent = recenzenci.includes(res._id);
          this.getOcena();
        });
      });
    // .subscribe((result) => {
    //   this.isLoading = result.loading;
    //   this.links = result.data.links;
    // });
  }

  getPlik(plik: any) {
    this.httpClient.get(`http://localhost:3000/file/${plik.unikalnaNazwaPliku}`,{responseType: "blob"})
    .subscribe((response: any) => { 
      
     const blob = new Blob([response], {type: 'application/pdf'});

    var downloadURL = window.URL.createObjectURL(response);
    var link = document.createElement('a');
    link.href = downloadURL;
    link.download = plik.nazwaPliku;
    link.click();
  })
  }

  async getOcena() {
   this.ocena = await this.httpClient.get(`http://localhost:3000/ocena-rec/${this.publikacjaa._id}/${this.user._id}`).toPromise();
  }
  
//   deletePlik() {

//     this.httpClient
//     .delete('http://localhost:3000/uploads'+this.data.plikId)
//     .subscribe();
// }




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
    const dodajPlikDialog = this.dialog.open(DodajPlikComponent, {
      data: { publikacjaId: this.publikacjaa._id },
    });
    dodajPlikDialog.afterClosed().subscribe(async () => {
      this.pliki = await this.httpClient.get(`http://localhost:3000/files/${this.publikacjaa._id}`).toPromise();

    })
  }
  async deletePlik1(id: string) {
    const usunPlikDialog =  this.dialog.open(UsunplikComponent, {
      data: { plikId: id },
    });
    usunPlikDialog.afterClosed().subscribe(async () => {
      this.pliki = await this.httpClient.get(`http://localhost:3000/files/${this.publikacjaa._id}`).toPromise();

    })
  }

  recenzenci() {
    this.dialog.open(RecenzentComponent, {
      data: { publikacjaId: this.publikacjaa._id },
    });
  }

  recOcenPublikacje() {
    this.dialog.open(RecenzowanieComponent, {
      data: { publikacjaId: this.publikacjaa._id, recenzentId: this.user._id },
    });
  }

  recWyswietlOcene() {
    this.dialog.open(OcenaComponent, {
      data: { ocena: this.ocena },
    });
  }
}
