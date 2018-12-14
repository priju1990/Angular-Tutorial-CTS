import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestApiUsersServiceService {

  constructor(private http : HttpClient) { }

  getRemoteUserData(){
   return this.http.get("http://localhost:3000/users");

  }

  createUserData(jsonUserObj){
  return this.http.post("http://localhost:3000/users",jsonUserObj)
  }

  deleteUserService(index){
    return this.http.delete("http://localhost:3000/users/"+index)
  }
  getDetailsOfUser(id){
     return this.http.get("http://localhost:3000/users/"+id);

  }
}
