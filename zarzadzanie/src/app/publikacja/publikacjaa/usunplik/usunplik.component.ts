import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usunplik',
  templateUrl: './usunplik.component.html',
  styleUrls: ['./usunplik.component.scss']
})
export class UsunplikComponent implements OnInit {

  constructor(    
    @Inject(MAT_DIALOG_DATA) public data: {plikId: string},
  private readonly route: ActivatedRoute,
  private readonly dialog: MatDialog,
  private readonly dialogRef: MatDialogRef<UsunplikComponent>,

  private httpClient: HttpClient) {

   }

  ngOnInit(): void {
  }

  deletePlik() {

    this.httpClient
    .delete('http://localhost:3000/file/'+this.data.plikId)
    .subscribe(() =>     this.dialogRef.close()
    );
    
    
}
  
  zamknij() {
  
  }
}


