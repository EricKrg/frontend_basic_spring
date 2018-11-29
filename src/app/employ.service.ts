import { Injectable } from '@angular/core';
import { Employee } from './employee/employee';
import { Http, Response } from "@angular/http";
import { Headers, RequestOptions } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable()

export class EmployService {
  private apiUrl = 'api/employees';

  constructor(private http: HttpClient) { }

  findAll(): Observable<Employee[]> {
   return this.http.get(this.apiUrl).pipe(
     map(res => res as Employee[])
   )
  }

}
