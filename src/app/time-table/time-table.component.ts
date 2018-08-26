import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { TimeTable } from '../models/time-table';
import { TimeTableService } from '../service/time-table.service';

const ELEMENT_DATA: TimeTable[] = [
  {up: '00 10 15', time: '06', down: '30 45'},
  {up: '00 10 15', time: '07', down: '30 45'},
  {up: '00 10 15', time: '08', down: '30 45'},
  {up: '00 10 15', time: '09', down: '30 45'},
];



@Component({
  selector: 'app-time-table',
  templateUrl: './time-table.component.html',
  styleUrls: ['./time-table.component.css']
})
export class TimeTableComponent implements OnInit {
  error: string;
  displayedColumns: string[] = ['up', 'time', 'down'];
  dataSource = ELEMENT_DATA;

  constructor(private timeTableService: TimeTableService) { }

  ngOnInit() {
    console.log('debug1');
    this.timeTableService.GetTimeTable().subscribe(
      data => {
        console.log('debug2');
        this.dataSource = data;
        console.log(this.dataSource);
      }, err => this.error = err);

      // this.searchService.GetAccountList(searchParams).subscribe(
    //   data => {
    //   this.CustSearchResult = data;
    //   console.log(this.CustSearchResult);
    // }, err => this.error = err);

  }

}
