import { Directive, HostBinding, HostListener, Input } from "@angular/core";

@Directive({ selector: "a[no-open]" })
export class NoOpenDirective {
  @Input("message-confirm")
  message = "";
  @HostListener("click")
  noOpenClick() {
    if (!confirm(this.message)) return false;
    return true;
  }
}
