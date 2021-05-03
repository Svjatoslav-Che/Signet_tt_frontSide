import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-get-api-page',
  templateUrl: './get-api-page.component.html',
  styleUrls: ['./get-api-page.component.scss']
})
export class GetApiPageComponent implements OnInit {
  public data: any = undefined;
  public sortYear: string = 'None';

  constructor(
    private apiService: ApiService,
  ) { }

  ngOnInit(): void {
  }

  getData() {
    this.apiService.get(`/`).subscribe((result) => {
      this.data = result;
    });
  }

  abortData() {
    this.data = undefined;
  }

  sortYearToggle() {
    switch (this.sortYear) {
      case 'None': {
        this.sortYear = 'Up';
        this.sortYearAction(this.sortYear);
        break;
      }
      case 'Up': {
        this.sortYear = 'Dwn';
        this.sortYearAction(this.sortYear);
        break;
      }
      case 'Dwn': {
        this.sortYear = 'Up';
        this.sortYearAction(this.sortYear);
        break;
      }
    }
  }

  sortYearAction (value: string) {
    switch (value) {
      case 'Up': {
        return this.data.sort(function (a: any, b: any) {
          return a.year - b.year;
        });
      }
      case 'Dwn': {
        return this.data.sort(function (a: any, b: any) {
          return b.year - a.year;
        });
      }
    }
  }
}
