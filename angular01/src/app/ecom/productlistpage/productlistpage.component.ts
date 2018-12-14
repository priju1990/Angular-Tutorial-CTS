import { PhoneserviceService } from './../../services/phoneservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productlistpage',
  templateUrl: './productlistpage.component.html',
  styleUrls: ['./productlistpage.component.css']
})
export class ProductlistpageComponent implements OnInit {

  constructor(private phone: PhoneserviceService) { }
  phoneCollection :any
  ngOnInit() {
    this.phone.getPhoneSpec().subscribe((response)=>{
      this.phoneCollection=response
      console.log(response)
    })
  }

}
