import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
} from "@angular/core";
@Directive({
  selector: "p[highlight]",
})
export class HighlightDirective {
  backgroundColor = "yellow";
  constructor(elementRef: ElementRef<HTMLElement>) {}
  @HostBinding("style.backgroundColor")
  color = "transparent";
  @HostListener("mouseenter")
  onMouseEnter() {
    this.color = "yellow";
  }
  @HostListener("mouseout")
  OnMouseOut() {
    this.color = "transparent";
  }
}
