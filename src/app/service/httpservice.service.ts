import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
} from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class HttpserviceService {
  private workOrderURL =
    'https://mock.apifox.cn/m1/2531206-0-default/api/getWorkOrder';
  getWorkOrder(date: string): Observable<any> {
    let params = new HttpParams();
    params = params.set('date', date);
    return this.http.get(this.workOrderURL);
  }
  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
  constructor(private http: HttpClient) {}
}
