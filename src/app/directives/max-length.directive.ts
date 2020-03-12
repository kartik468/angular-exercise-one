import { Directive, Input, ElementRef, OnInit, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appMaxLength]'
})
export class MaxLengthDirective implements OnInit {
  @Input('appMaxLength') maxLength = 10;

  @HostBinding('class.invalid') invalid = false;

  @HostListener('input', ['$event']) onInputChange(event) {
    // const value = event.target.value;
    const value: string = this.el.nativeElement.value;
    console.log(value);
    this.setValidity(value);
  }

  setValidity(value: string) {
    this.invalid = value.length > this.maxLength ? true : false;
  }

  constructor(private el: ElementRef) {}

  ngOnInit() {
    const value: string = this.el.nativeElement.value;
    console.log(value);
    this.setValidity(value);
  }
}
