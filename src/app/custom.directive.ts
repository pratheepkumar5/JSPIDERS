import {
  Directive,
  ElementRef,
  HostListener,
  HostBinding
} from "@angular/core";
@Directive({
  selector: "[anu]" // directive name
})
export class CustomDirective {
  //dependancy injuction
  constructor(el: ElementRef) {
    el.nativeElement.style.background = "red";
    el.nativeElement.style.color = "white";
    el.nativeElement.style.padding = "10px";
    el.nativeElement.style.boederRadius = "10px";
    el.nativeElement.style.border = "1px solid #111";
  }

  @HostBinding("style.background") background: string = "red";
  @HostBinding("style.transform") transform: string;
  @HostBinding("style.transition") transition: string;

  // @HostListener("click") event() {
  //   alert("events comming");
  // }

  @HostListener("mouseenter") mouseenter() {
    console.log("mouser enterd 😃");
    this.background = "blue";
    this.transform = "rotate(180deg)";
    this.transition = "all 5s";
  }

  @HostListener("mouseleave") mouseleave() {
    console.log("mouse leave here🤣 🤣😂");
    this.background = "orange";
    this.transform = "rotate(300deg)";
    this.transition = "all 5s";
  }
}
