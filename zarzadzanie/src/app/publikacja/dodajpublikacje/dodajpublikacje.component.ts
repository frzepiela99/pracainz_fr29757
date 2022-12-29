import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CreatePublikacjaGQL, PublikacjaDocument } from '../../../generated-types';
@Component({
  selector: 'app-dodajpublikacje',
  templateUrl: './dodajpublikacje.component.html',
  styleUrls: ['./dodajpublikacje.component.scss']
})
export class DodajpublikacjeComponent implements OnInit {
  publikacjaTytul = new FormControl('', [Validators.required]);
  publikacjaStreszczenie = new FormControl('', [Validators.required]);
  publikacjaautorStopienNaukowy = new FormControl('', [Validators.required]);
  publikacjaautorImie = new FormControl('', [Validators.required]);
  publikacjaautorNazwisko = new FormControl('', [Validators.required]);

  constructor( private readonly createPublikacjaGql: CreatePublikacjaGQL, 
    private readonly router: Router,
    ) {}

  ngOnInit(): void {}

  getPublikacjaTytulError() {
    if (this.publikacjaTytul.hasError('required')) {
      return 'You must enter a value.';
    }
    return '';
  }

  getPublikacjaStreszczenieError() {
    if (this.publikacjaStreszczenie.hasError('required')) {
      return 'You must enter a value.';
    }
    return '';
  }

  getPublikacjaAutorStopienNaukowyError() {
    if (this.publikacjaautorStopienNaukowy.hasError('required')) {
      return 'You must enter a value.';
    }
    return '';
  }

  
  getPublikacjaAutorImieError() {
    if (this.publikacjaautorImie.hasError('required')) {
      return 'You must enter a value.';
    }
    return '';
  }

  
  getPublikacjaAutorNazwiskoError() {
    if (this.publikacjaautorNazwisko.hasError('required')) {
      return 'You must enter a value.';
    }
    return '';
  }

  createPublikacja() {
    if(!this.publikacjaTytul.value || !this.publikacjaStreszczenie.value || !this.publikacjaautorStopienNaukowy.value || !this.publikacjaautorImie.value || !this.publikacjaautorNazwisko.value) return;
    this.createPublikacjaGql
    .mutate(
      {
        createPublikacjaData: { tytul: this.publikacjaTytul.value, streszczenie: this.publikacjaStreszczenie.value, autorStopienNaukowy: this.publikacjaautorStopienNaukowy.value, autorImie: this.publikacjaautorImie.value, autorNazwisko: this.publikacjaautorNazwisko.value },
      },
      {
        refetchQueries: [
          {
            query: PublikacjaDocument,
          },
        ],
      }
    )
    .subscribe((result) => {console.log (result)}, error => {console.log (error)
    });
    this.router.navigate(['/publikacja']);

  }

}