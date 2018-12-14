import { Router } from '@angular/router';
import { RestApiUsersServiceService } from './../../services/rest-api-users-service.service';
import { Component, OnInit } from '@angular/core';
 

@Component({
  selector: 'app-users-apicomponent',
  templateUrl: './users-apicomponent.component.html',
  styleUrls: ['./users-apicomponent.component.css']
})
export class UsersAPIComponentComponent implements OnInit {

allUsers : any

  constructor(private user :RestApiUsersServiceService, private router: Router) { }

  ngOnInit() {
    this.getApiData();
  }

  getApiData(){
    this.user.getRemoteUserData().subscribe((respData)=>{
      this.allUsers= respData
      console.log(this.allUsers)
    })
   
  }

  createNewUser(username,useremail,userCity){
   let userObj={ "name":username,"email":useremail,"address":{"city":userCity}}
   
    this.user.createUserData(userObj).subscribe((response)=>{
       this.user.getRemoteUserData().subscribe((respData)=>{
         this.allUsers=respData;
       })
      console.log(response);
      
    })
  }

  deleteUser(index){
    console.log(index);
    this.user.deleteUserService(index).subscribe((res)=>{
        console.log(res);
       this.user.getRemoteUserData().subscribe((respData)=>{
         this.allUsers=respData;
       })
    })
  }

  viewDetails(id){
    console.log(id)
    this.router.navigate(["/remoteData",id])  // it will navigate to remoteData/id..whatever id is passed
  }

}
