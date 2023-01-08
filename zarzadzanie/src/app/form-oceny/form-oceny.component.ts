import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';


@Component({
  selector: 'app-form-oceny',
  templateUrl: './form-oceny.component.html',
  styleUrls: ['./form-oceny.component.scss']
})
export class FormOcenyComponent implements OnInit {
  userForm = new FormGroup({
    skalaOcena : new FormControl('', [Validators.required]),
    komentarz : new FormControl('', [Validators.required]),
  });
  constructor(
    private http: HttpClient,
    @Inject(MAT_DIALOG_DATA) public data: {publikacjaId: string, userId: string},
    private readonly dialogRef: MatDialogRef<FormOcenyComponent>,
    private readonly router: Router
  ) { }

  ngOnInit(): void {
  }

  createOcenaUzytkownik() {
    console.log('data', this.data.userId)
    const dto1 = {...this.userForm.value, publikacjaId: this.data.publikacjaId, userId: this.data.userId}
    console.log('dto1', dto1)
    this.http
    .post('http://localhost:3000/ocena-user', dto1)
    .subscribe((response) => {});
    this.dialogRef.close(this.createOcenaUzytkownik);
    console.log('create', this.createOcenaUzytkownik)

    //console.warn(this.userForm.value);
  }
   getOcenaUser() {
    
   }
}
