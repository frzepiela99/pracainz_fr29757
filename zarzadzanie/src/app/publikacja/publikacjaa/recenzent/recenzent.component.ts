import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { map, Observable } from 'rxjs';
import { User, UsersAllGQL } from 'src/generated-types';
import { HttpClient } from '@angular/common/http';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-recenzent',
  templateUrl: './recenzent.component.html',
  styleUrls: ['./recenzent.component.scss']
})
export class RecenzentComponent implements OnInit {
  @ViewChild('rec') rec: any; 
  users$: Observable<User[]>;
  recenzenci!: any;
  constructor(
    private http: HttpClient,
    @Inject(MAT_DIALOG_DATA) public data: {publikacjaId: string},
    private readonly usersAllGql: UsersAllGQL,
    private readonly dialogRef: MatDialogRef<RecenzentComponent>,
  ) { }

  async ngOnInit(): Promise<void> {
    this.users$ = this.usersAllGql
    .watch()
    .valueChanges.pipe(map((result) => result.data.usersAll));
    this.recenzenci = await this.http.get(`http://localhost:3000/recenzent/${this.data.publikacjaId}`).toPromise();
  }

  async confirm() {
    console.log('id', this.data.publikacjaId)
    await this.http.post(
      'http://localhost:3000/recenzent',
      { publikacjaId: this.data.publikacjaId, recenzenci: this.rec._value }
    ).subscribe((response) => {});
    this.dialogRef.close();
  }
}
