
import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-dodaj-plik',
  templateUrl: './dodaj-plik.component.html',
  styleUrls: ['./dodaj-plik.component.scss']
})
export class DodajPlikComponent implements OnInit {

  constructor( private http: HttpClient,
    @Inject(MAT_DIALOG_DATA) public data: {publikacjaId: string}) { 

  }

  ngOnInit(): void {
  }

  file:any;
  getFile(event: any) {
this.file = event.target.files[0];

console.log('file', this.file);
  }

  uploadFile(){
    let formData = new FormData()
    formData.set("file", this.file);
    formData.set("publikacjaId", this.data.publikacjaId);

    this.http
    .post('http://localhost:3000/uploads', formData)
    .subscribe((response) => {});
  }
}
