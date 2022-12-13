import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { Publikacja, PublikacjaaGQL } from 'src/generated-types';

@Component({
  selector: 'app-publikacjaa',
  templateUrl: './publikacjaa.component.html',
  styleUrls: ['./publikacjaa.component.scss']
})
export class PublikacjaaComponent implements OnInit {
publikacjaa: Publikacja;
  constructor(
    private readonly route: ActivatedRoute,
    private readonly publikacjaaGql: PublikacjaaGQL
  ) {}

  ngOnInit(): void {
    this.route.params
      .pipe(
        switchMap((params) => {
          return this.publikacjaaGql.watch({ _id: params['id'] }).valueChanges;
        }),
        // switchMap((result) => {
        //   this.bookmark = result.data.bookmark;
        //   return this.linksGql.watch({ urls: result.data.bookmark.links })
        //     .valueChanges;
        // })
      )
      .subscribe((result) => {
        this.publikacjaa = result.data.publikacjaa
      });
      // .subscribe((result) => {
      //   this.isLoading = result.loading;
      //   this.links = result.data.links;
      // });
  }

}
