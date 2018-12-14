import { RestApiUsersServiceService } from './../../services/rest-api-users-service.service';
import { UsersAPIComponentComponent } from './../users-apicomponent/users-apicomponent.component';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  activePath :any
  userdetails :any


  constructor( private active: ActivatedRoute , private userDetailsService : RestApiUsersServiceService) { }

  ngOnInit() {

    this.activePath =this.active.snapshot.paramMap.get("id")
    console.log(this.activePath)
    this.getDetails(this.activePath)
   
  }

  getDetails(path)
   {this.userDetailsService.getDetailsOfUser(path).subscribe((response)=>{
    this.userdetails=response
      console.log(response)
    }
    
   )}

}
