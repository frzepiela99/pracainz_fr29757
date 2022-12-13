import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { CreatePublikacjaGQL, PublikacjaDocument } from '../../../generated-types';
@Component({
  selector: 'app-dodajpublikacje',
  templateUrl: './dodajpublikacje.component.html',
  styleUrls: ['./dodajpublikacje.component.scss']
})
export class DodajpublikacjeComponent implements OnInit {
  publikacjaTytul = new FormControl('', [Validators.required]);
  publikacjaStreszczenie = new FormControl('', [Validators.required]);

  constructor( private readonly createPublikacjaGql: CreatePublikacjaGQL) {}

  ngOnInit(): void {}

  getPublikacjaTytulError() {
    if (this.publikacjaTytul.hasError('required')) {
      return 'You must enter a value.';
    }
    return '';
  }

  getPublikacjaStreszczenieError() {
    if (this.publikacjaTytul.hasError('required')) {
      return 'You must enter a value.';
    }
    return '';
  }

  createPublikacja() {
    if(!this.publikacjaTytul.value || !this.publikacjaStreszczenie.value) return;
    this.createPublikacjaGql
    .mutate(
      {
        createPublikacjaData: { tytul: this.publikacjaTytul.value, streszczenie: this.publikacjaStreszczenie.value },
      },
      {
        refetchQueries: [
          {
            query: PublikacjaDocument,
          },
        ],
      }
    )
    .subscribe((result) => {console.log (result)}, error => {console.log (error)}
    );
  }

}