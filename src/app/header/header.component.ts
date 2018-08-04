import { Component, OnInit } from '@angular/core';

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
    {value: '1', viewValue: '広島'},
    {value: '2', viewValue: '天神川'},
    {value: '3', viewValue: '向洋'},
    {value: '4', viewValue: '海田市'},
    {value: '5', viewValue: '矢野'},
    {value: '6', viewValue: '坂'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
