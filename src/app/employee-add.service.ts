import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, ResponseContentType } from '@angular/http';
import { Hero } from './hero';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EmployeeAddService {
  url:any;
  constructor(private http: Http, private httpClient: HttpClient) { }

  getEmployee(vcrNumber): Observable<any>{
  //this.url='https://10.80.2.66:8989/reg/citizenServices/getVehicleReleaseReport?vcrNumber'+vcrNumber;
  this.url = "https://otsiuat.epragathi.org:8443/reg/citizenServices/findAllServiceCombinations";
  // return this.http.get(this.url).map((response: Response) => {
  //   const result = response.json();
  //   return result;
  // });
  return this.httpClient.get(this.url);
  }
}
