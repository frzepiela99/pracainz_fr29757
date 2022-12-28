import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Publikacja, PublikacjaDocument, UpdatePublikacjaTytulGQL } from 'src/generated-types';

@Component({
  selector: 'app-zmien-tytul',
  templateUrl: './zmien-tytul.component.html',
  styleUrls: ['./zmien-tytul.component.scss']
})
export class ZmienTytulComponent implements OnInit {
  publikacjaTytul = new FormControl('', [Validators.required]);
  constructor(
     @Inject(MAT_DIALOG_DATA)
     private readonly data: { publikacjaa: Publikacja },
     private readonly dialogRef: MatDialogRef<ZmienTytulComponent>,
     private readonly updatePublikacjaTytulGql: UpdatePublikacjaTytulGQL
  ) { 

  }

  ngOnInit(): void {
  }

  getPublikacjaTytul1Error() {
    if (this.publikacjaTytul.hasError('required')) {
      return 'You must enter a value.';
    }
    return '';
  }

  editTytul()
  {
    if(!this.publikacjaTytul.value) return;
    this.updatePublikacjaTytulGql
      .mutate(
        {
          updatePublikacjaTytulData:
          {
            _id: this.data.publikacjaa._id,
            tytul: this.publikacjaTytul.value,
            // //this.data.publikacjaa.autorStopienNaukowy,
            // autorImie: this.autorImie.value,
            // //this.data.publikacjaa.autorImie,
            // autorNazwisko: this.autorNazwisko.value,
            // //this.data.publikacjaa.autorNazwisko,
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
