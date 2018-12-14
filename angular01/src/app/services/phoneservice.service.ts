import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PhoneserviceService {

  constructor(private http : HttpClient) { }

  getPhoneSpec(){
    return this.http.get("http://localhost:3000/plp");

  }
}
