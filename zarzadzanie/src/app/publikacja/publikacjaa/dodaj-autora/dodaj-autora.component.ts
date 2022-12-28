import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Publikacja, PublikacjaDocument, UpdatePublikacjaAutorGQL } from 'src/generated-types';

@Component({
  selector: 'app-dodaj-autora',
  templateUrl: './dodaj-autora.component.html',
  styleUrls: ['./dodaj-autora.component.scss']
})
export class DodajAutoraComponent implements OnInit {
  autorStopienNaukowy = new FormControl('', [Validators.required]);
  autorImie = new FormControl('', [Validators.required]);
  autorNazwisko = new FormControl('', [Validators.required]);

  constructor(
    @Inject(MAT_DIALOG_DATA)
    private readonly data: { publikacjaa: Publikacja },
    private readonly dialogRef: MatDialogRef<DodajAutoraComponent>,
    private readonly updatePublikacjaAutorGql: UpdatePublikacjaAutorGQL
  ) { }

  ngOnInit(): void {
  }

  getAutorImieError() {
    if (this.autorImie.hasError('required')) {
      return 'You must enter a value.';
    }
    return '';
  }

  getAutorNazwiskoError() {
    if (this.autorNazwisko.hasError('required')) {
      return 'You must enter a value.';
    }
    return '';
  }

  getAutorStopien_naukowyError() {
    if (this.autorStopienNaukowy.hasError('required')) {
      return 'You must enter a value.';
    }
    return '';
  }

  editAutor() {
    if(!this.autorStopienNaukowy.value || !this.autorImie.value || !this.autorNazwisko.value) return;
    this.updatePublikacjaAutorGql
      .mutate(
        {
          updatePublikacjaAutorData:
          {
            _id: this.data.publikacjaa._id,
            autorStopienNaukowy: this.autorStopienNaukowy.value,
            //this.data.publikacjaa.autorStopienNaukowy,
            autorImie: this.autorImie.value,
            //this.data.publikacjaa.autorImie,
            autorNazwisko: this.autorNazwisko.value,
            //this.data.publikacjaa.autorNazwisko,
          },
        },
        {
          refetchQueries: [
            {
              query: PublikacjaDocument,
              variables: { _id: this.data.publikacjaa._id },
            },
          ],
        }
      )    .subscribe((result) => {console.log (result)}, error => {console.log (error);
            this.dialogRef.close();
      });
  }
}
