import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
    selector: "[appRedText]"
})
export class RedTextDirective implements OnInit {
    
    constructor(private element: ElementRef) {}

    ngOnInit(){
        (<HTMLElement>this.element.nativeElement).style.backgroundImage = "linear-gradient(to bottom right, orange, tomato)";
        // background-image: linear-gradient(to bottom right, var(--tw-gradient-stops))
    }
}