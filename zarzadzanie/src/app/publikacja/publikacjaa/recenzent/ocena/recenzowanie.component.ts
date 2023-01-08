import { Component, Inject, OnInit } from '@angular/core';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';


@Component({
  selector: 'app-recenzowanie',
  templateUrl: './recenzowanie.component.html',
  styleUrls: ['./recenzowanie.component.scss']
})
export class RecenzowanieComponent implements OnInit {
  recenzentForm = new FormGroup({
    zgodnoscTemat : new FormControl('', [Validators.required]),
    skalaZgodnoscTemat : new FormControl('', [Validators.required]),
    skalaUklad : new FormControl('', [Validators.required]),
    merytorycznaOcena : new FormControl('', [Validators.required]),
    skalaMerytorycznaOcena : new FormControl('', [Validators.required]),
    uwagi : new FormControl('', [Validators.required]),
    charakterystykaZrodel : new FormControl('', [Validators.required]),
    formalnaStrona : new FormControl('', [Validators.required]),
    skalaFormalnaStrona : new FormControl('', [Validators.required]),
    sposobWykorzystania : new FormControl('', [Validators.required]),
    skalaOcena : new FormControl('', [Validators.required]),
  });


  //ocena = new FormControl('', [Validators.required]);

  constructor(private http: HttpClient,
    @Inject(MAT_DIALOG_DATA) public data: {publikacjaId: string, recenzentId: string},
    private readonly dialogRef: MatDialogRef<RecenzowanieComponent>,
    private readonly router: Router,) { }

  ngOnInit(): void {
  }

  ocena:any;
  ocenaRecDto: any;
  

  createOcenaRecenzent() {
    //  let formData = new FormData()
    //   formData.set("publikacjaId", this.data.publikacjaId);
    console.log('data', this.data.recenzentId)
    const dto = {...this.recenzentForm.value, publikacjaId: this.data.publikacjaId, recenzentId: this.data.recenzentId}
    console.log('dto', dto)
    this.http
    .post('http://localhost:3000/ocena-rec', dto)
    .subscribe((response) => {});
    this.dialogRef.close(this.createOcenaRecenzent);
    console.warn(this.recenzentForm.value);
  }

  getOcenaRecenzent() {
    
  }
  
}
