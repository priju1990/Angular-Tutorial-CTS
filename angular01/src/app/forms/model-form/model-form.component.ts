import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl,Validators} from '@angular/forms'

@Component({
  selector: 'app-model-form',
  templateUrl: './model-form.component.html',
  styleUrls: ['./model-form.component.css']
})
export class ModelFormComponent implements OnInit {

modelForm :any
  constructor() { }

  ngOnInit() {
    this.modelForm= new FormGroup({
    name : new FormControl("",Validators.compose([Validators.minLength(3),Validators.pattern('^[A-Za-z]+$')])),
    email: new FormControl("",this.checkEmailLeangth),
    hobby:new FormControl()

    })
  }
checkEmailLeangth(email){

if(email.value.length <4){
return {'email':true}
}

}
  modelFormUser(user){
  console.log(user)}

}
