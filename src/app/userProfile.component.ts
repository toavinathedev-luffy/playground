import { Component, Directive, ElementRef, Input } from "@angular/core";

@Component({
  selector: "userProfile",
  template: `
    <h3>firstName=</h3>
    <h3>lastName=</h3>
    <h2>job=</h2>
  `,
})
export class UserProfileComponent {
  @Input("firstName")
  first = "Toavina";
  @Input("lastName")
  last = "ggg";
  @Input()
  job = "";
  constructor(private elementRef: ElementRef<HTMLElement>) {}
  ngOnInit() {}
}
