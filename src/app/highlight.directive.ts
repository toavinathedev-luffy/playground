import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
} from "@angular/core";
@Directive({
  selector: "p[highlight]",
})
export class HighlightDirective {
  @Input("bg-color")
  backgroundColor = "yellow";
  @Input("basic")
  basicColor = "#255487";
  @HostBinding("style.backgroundColor")
  color = "";
  @HostListener("mouseenter")
  onMouseEnter() {
    this.color = this.backgroundColor;
  }
  @HostListener("mouseout")
  OnMouseOut() {
    this.color = this.basicColor;
  }
  //   ngOnInit() {
  //     this.color = this.basicColor;
  //   }
}
