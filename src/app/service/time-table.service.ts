import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

const REST_URL = 'https://script.google.com/macros/s/AKfycbyo8G81M0NTiXYc-EqotZZWDiOKFpwfKbNsl_NcqI9TtiA13s-4/exec?rsrc=station';

@Injectable()
export class TimeTableService {

  constructor(private httpClient: HttpClient) { }

  protected Get<T extends string, U extends HttpParams>(httpUrl: T, params?: U): Observable<any[]> {

    return this.httpClient.get<any[]>(httpUrl , {params});
    }

  GetTimeTable() {
    return this.Get(REST_URL);
  }

}
