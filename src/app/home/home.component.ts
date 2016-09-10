import {Component,Output,EventEmitter} from "@angular/core";

@Component({
  templateUrl: "home.template.html",

})

export class HomeComponent {

  @Output() eventEmitter : EventEmitter<boolean> =new  EventEmitter<boolean>();

  constructor() {

  }


  ExpFunc(val:boolean){
    this.eventEmitter.emit(val);

  }

}