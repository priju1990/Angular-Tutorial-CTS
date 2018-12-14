import { Component, OnInit } from '@angular/core';
import {Localservice1Service} from 'src/app/services/localservice1.service'

@Component({
  selector: 'app-consume-local-service1',
  templateUrl: './consume-local-service1.component.html',
  styleUrls: ['./consume-local-service1.component.css']
})
export class ConsumeLocalService1Component implements OnInit {
message1=""
  constructor( private localService :Localservice1Service) { }

  ngOnInit() {

    this.localService.sayHelloService1()
     this.localService.friends.push("fromCom1");
    this.message1=this.localService.messageFromLocalService
      console.log(this.localService.friends);
   
  }


}
