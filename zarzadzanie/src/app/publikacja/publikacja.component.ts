import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Publikacja, PublikacjaGQL } from 'src/generated-types';


@Component({
  selector: 'app-publikacja',
  templateUrl: './publikacja.component.html',
  styleUrls: ['./publikacja.component.scss']
})
export class PublikacjaComponent implements OnInit {
  publikacja$: Observable<Publikacja[]>;

  constructor(
    private readonly publikacjaGql: PublikacjaGQL,
    private readonly router:Router
    ) {}

  ngOnInit(): void {
    this.publikacja$ = this.publikacjaGql
    .watch()
    .valueChanges.pipe(map((result) => result.data.publikacja));
  }

  onPublikacjaClick(publikacjaId: string) {
    this.router.navigate(['/publikacja', publikacjaId]);
  }

}
