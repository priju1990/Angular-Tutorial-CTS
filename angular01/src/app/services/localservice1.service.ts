import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Localservice1Service {
 messageFromLocalService="Hello world";
 friends =["ola","uber"]
 sayHelloService1(){
  console.log("service 1 is called");
}
  constructor() { }
}
