import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-manager',
  templateUrl: './task-manager.component.html',
  styleUrls: ['./task-manager.component.css']
})
export class TaskManagerComponent implements OnInit {

  counter=0;
  salary= 10000
  mydate= new Date()
  myString="hello"
  myFriends =['priya','kiran','uday','thejas']
  myScore = [10,120,30,43,78]
  myTasks =['Eat','Play','Code','Sleep']
  myCompetedTasks=[]

  constructor() { }

  ngOnInit() {
  }

  saveItem = function(item){
    this.myTasks.push(item)
   
    console.log("Item is added" +item);
    this.item=""
  
  }

  removeItem = function(ct){
     this.myCompetedTasks.push(this.myTasks[ct]);
    this.myTasks.splice(ct,1);

  }

}
