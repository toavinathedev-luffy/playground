import { Directive, ElementRef, Input } from "@angular/core";

@Directive({
  selector: "userProfile",
})
export class UserProfileComponent {
  @Input("firstName")
  first = "";
  @Input("lastName")
  last = "";
  @Input()
  job = "";
  constructor(private elementRef: ElementRef<HTMLElement>) {}
  ngOninit() {
    this.elementRef.nativeElement.innerHTML = `
    <h3>firstName= ${this.first}</h3>
    <h3>lastName= ${this.last}</h3>
    <h2>job= ${this.job}</h2>
    `;
  }
}
