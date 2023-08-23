import { Directive, HostListener, Input } from "@angular/core";

@Directive({ selector: "a[confirm]" })
export class ConfirmDirective {
  @Input("confirmMessage")
  message = "";
  @HostListener("click")
  clickConfirm() {
    return confirm(this.message);
  }
}
