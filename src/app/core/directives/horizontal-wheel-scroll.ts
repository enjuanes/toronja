import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHorizontalWheelScroll]',
  host: {
    '(wheel)': 'onWheelScroll($event)',
  },
})
export class HorizontalWheelScrollDirective {
  constructor(private el: ElementRef) {}

  onWheelScroll(event: WheelEvent): void {
    event.preventDefault();

    this.el.nativeElement.scrollBy({
      left: event.deltaY,
      behavior: 'smooth',
    });
  }
}
