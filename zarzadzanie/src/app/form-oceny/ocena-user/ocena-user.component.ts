import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ocena-user',
  templateUrl: './ocena-user.component.html',
  styleUrls: ['./ocena-user.component.scss']
})
export class OcenaUserComponent implements OnInit {
  userForm = new FormGroup({
    skalaOcena : new FormControl('', [Validators.required]),
    komentarz : new FormControl('', [Validators.required]),
  });
  constructor(
    private http: HttpClient,
    @Inject(MAT_DIALOG_DATA) public data: {ocenauz: any},
    private readonly dialogRef: MatDialogRef<OcenaUserComponent>,
    private readonly router: Router
  ) { }

  ngOnInit(): void {
    console.log(this.data.ocenauz);
  }

  ocenauz: any;

  createOcenaUzytkownik() {
    console.log('data', this.data.ocenauz)
    const dto1 = {...this.userForm.value}
    console.log('dto1', dto1)
    this.http
    .post('http://localhost:3000/ocena-user', dto1)
    .subscribe((response) => {});
    this.dialogRef.close(this.createOcenaUzytkownik);
    console.warn(this.userForm.value);
  }

  getOcenaUser() {

  }
}
