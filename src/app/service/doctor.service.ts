import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environments';
import { HttpClient } from '@angular/common/http'
import { Doctor } from '../Class/Doctor';
import {Observable} from 'rxjs'

const url4=environment.URL+"api/";

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  APi = "http://localhost:8080/api"

  constructor(private http: HttpClient) { }
  getDoctorList(){
    return this.http.get<any[]>(`${this.APi}/all`);
  }

  saveDoctors(doctor: Doctor): Observable<object>{
    return this.http.post(`${this.APi}/doctor`, doctor);

  }
 
}



