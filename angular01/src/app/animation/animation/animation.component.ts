import { Component, OnInit } from '@angular/core';
import {trigger,state,transition,animate,style} from '@angular/animations'

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.css'],
 
  animations: [
  trigger("growUpAnimation",[state("small",style({'color':'black',transform:'scale(1)'})),
  state("big",style({'color':'green' ,transform:'scale(4)'})),
  transition('small <=> big', animate('300ms ease-in'))
  ]
  ) ,
  
  ]

 //trigger - has 3 params..name of animation,state def and transtion.
 //NAME of the triggerer- growUpAnimation,
 //STATE then define the state.which is basically has the name of the state1 & state 2. 
 //Each state has styles associated to it. 
 //TRANSITION -it defines the relation of the states and what animation is to be applied

})
export class AnimationComponent implements OnInit {
  defaultState : String = 'small'
  text: String= "I wish to grow"
  constructor() { }

  ngOnInit() {
  }

  animateNow(){

    this.defaultState= this.defaultState== 'small'?'big':'small'
    if(this.text == "I grew up")
      this.text ="I wish to grow"
      else
      this.text ="I grew up"
  }

}
