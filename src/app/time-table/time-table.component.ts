import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

export interface TimeTable {
  leftTime: string;
  time: string;
  rightTime: string;
}

const ELEMENT_DATA: TimeTable[] = [
  {leftTime: '00 10 15', time: '06', rightTime: '30 45'},
  {leftTime: '00 10 15', time: '07', rightTime: '30 45'},
  {leftTime: '00 10 15', time: '08', rightTime: '30 45'},
  {leftTime: '00 10 15', time: '09', rightTime: '30 45'},
];



@Component({
  selector: 'app-time-table',
  templateUrl: './time-table.component.html',
  styleUrls: ['./time-table.component.css']
})
export class TimeTableComponent implements OnInit {

  displayedColumns: string[] = ['leftTime', 'time', 'rightTime'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }

}
