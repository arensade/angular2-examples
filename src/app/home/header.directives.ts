import {Directive,Input} from "@angular/core";

@Directive({
    selector:"[header]"
})

export class Header {
    
    @Input() set eventListener (val){
        
    val.subscribe((param:boolean)=>{
        alert(param);
        this.doSomeThing(param);
    });
}

    constructor(){

    }

    doSomeThing(val){
        console.log(val);
    }

}