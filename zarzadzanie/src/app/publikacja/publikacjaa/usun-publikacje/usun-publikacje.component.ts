import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DeletePublikacjaGQL, Publikacja, PublikacjaDocument } from 'src/generated-types';

@Component({
  selector: 'app-usun-publikacje',
  templateUrl: './usun-publikacje.component.html',
  styleUrls: ['./usun-publikacje.component.scss']
})
export class UsunPublikacjeComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA)
    private readonly data: { publikacjaa: Publikacja },
    private readonly dialogRef: MatDialogRef<UsunPublikacjeComponent>,
    private readonly DeletePublikacjaGql: DeletePublikacjaGQL,
    private readonly router: Router,

  ) { }

  ngOnInit(): void {
  }

  deletePublikacja(){
    this.DeletePublikacjaGql
      .mutate(
        {
          deletePublikacjaData:
          {
            _id: this.data.publikacjaa._id,
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
      )     .subscribe((result) => {console.log (result)}, error => {console.log (error);
      });
      this.dialogRef.close();
      this.router.navigate(['/publikacja']);
  }

  zamknij() {
    this.dialogRef.close();
    
  }
}
