import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Publikacja, PublikacjaDocument, UpdatePublikacjaStreszczenieGQL } from 'src/generated-types';

@Component({
  selector: 'app-zmien-streszczenie',
  templateUrl: './zmien-streszczenie.component.html',
  styleUrls: ['./zmien-streszczenie.component.scss']
})
export class ZmienStreszczenieComponent implements OnInit {
  publikacjaStreszczenie = new FormControl('', [Validators.required]);

  constructor(
    @Inject(MAT_DIALOG_DATA)
    private readonly data: { publikacjaa: Publikacja },
    private readonly dialogRef: MatDialogRef<ZmienStreszczenieComponent>,
    private readonly updatePublikacjaStreszczenieGql: UpdatePublikacjaStreszczenieGQL
  ) { }

  ngOnInit(): void {
  }
  getPublikacjaStreszczenie1Error() {
    if (this.publikacjaStreszczenie.hasError('required')) {
      return 'You must enter a value.';
    }
    return '';
  }

  editStreszczenie() 
  {
    if(!this.publikacjaStreszczenie.value) return;
    this.updatePublikacjaStreszczenieGql
      .mutate(
        {
          updatePublikacjaStreszczenieData:
          {
            _id: this.data.publikacjaa._id,
            streszczenie: this.publikacjaStreszczenie.value,
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
