import { Component, Directive, ElementRef, Input } from "@angular/core";

@Component({
  selector: "userProfile",
  template: `
    <h3>firstName= {{ first | uppercase }}</h3>
    <h3>lastName= {{ last }}</h3>
    <img [src]="source == '' ? '...' : source" alt="image du logo" />
    <h2>job= {{ job }},({{ revenue | currency : "EUR" : "symbol" }})/mois</h2>
    <p [class.hired]="isHired" ]></p>
  `,
  styles: [
    `
      h3 {
        color: brown;
      }
      .hired {
        background: green;
      }
    `,
  ],
})
export class UserProfileComponent {
  @Input()
  revenue: number = 1200;

  @Input("firstName")
  first = "Andriam's";
  @Input("lastName")
  last = "Toavina";
  @Input()
  job = "developpeur";
  source = "";
  @Input()
  isHired = false;
  constructor(private elementRef: ElementRef<HTMLElement>) {}
  ngOnInit() {}
}
