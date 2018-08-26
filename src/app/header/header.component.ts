import { Component, OnInit } from '@angular/core';
import { TimeTableService } from '../service/time-table.service';
// import { TimeTable, TimeTables} from '../time-table/time-table.component';

export interface Station {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  stations: Station[] = [
    // {value: '1', viewValue: '広島'},
    {value: '2', viewValue: '天神川'},
    // {value: '3', viewValue: '向洋'},
    // {value: '4', viewValue: '海田市'},
    // {value: '5', viewValue: '矢野'},
    // {value: '6', viewValue: '坂'},
  ];

  // timeTableList: TimeTables[];

  constructor(private timeTableService: TimeTableService) { }

  ngOnInit() {
    // this.timeTableService.GetTimeTable().subscribe(
    //   data => {
    //   this.CustSearchResult = data;
    //   console.log(this.CustSearchResult);
    // }, err => this.error = err);

  }

}
