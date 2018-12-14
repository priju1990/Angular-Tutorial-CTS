import { Localservice1Service } from 'src/app/services/localservice1.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consume-local-service2',
  templateUrl: './consume-local-service2.component.html',
  styleUrls: ['./consume-local-service2.component.css']
})
export class ConsumeLocalService2Component implements OnInit {

  constructor(private ls : Localservice1Service) { }

  ngOnInit() {
    this.ls.friends.push("fromCom2");
    console.log(this.ls.friends);
  }

}
