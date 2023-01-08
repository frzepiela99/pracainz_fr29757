import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { Publikacja, PublikacjaAllGQL, PublikacjaGQL } from 'src/generated-types';


export interface User {
  name: string;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  publikacja$: Observable<Publikacja[]>;

  constructor(
    private readonly publikacjaAllGql: PublikacjaAllGQL,
    private readonly router:Router
  ) {}

  myControl = new FormControl<string | Publikacja>('');
  options: User[] = [];
  filteredOptions: Observable<Publikacja[]>;

  ngOnInit() : void {
    // this.filteredOptions = this.myControl.valueChanges.pipe(
    //   startWith(''),
    //   map(value => {
    //     const name = typeof value === 'string' ? value : value?.name;
    //     return name ? this._filter(name as string) : this.options.slice();
    //   }),
    // );

    this.publikacja$ = this.publikacjaAllGql
    .watch()
    .valueChanges.pipe(map((result) => result.data.publikacjaAll));
  }

  displayFn(user: User): string {
    return user && user.name ? user.name : '';
  }

  private _filter(name: string): User[] {
    const filterValue = name.toLowerCase();

    return this.options.filter(option => option.name.toLowerCase().includes(filterValue));
  }

  onPublikacjaClick(publikacjaId: string) {
    this.router.navigate(['/publikacja', publikacjaId]);
  }
}