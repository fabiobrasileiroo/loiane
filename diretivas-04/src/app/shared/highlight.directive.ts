import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {
  @HostListener('mouseenter') onMouseOver() {
    this.backgroundColor = this.hightligtColor 
    //this.color = 'white'
  }

  @HostListener('mouseleave') onMouseLeve() {
    this.backgroundColor = this.defaultColor;
    //this.color = 'black'
  }

  @Input() defaultColor: string = 'white'
  @Input('highlight') hightligtColor: string = 'blue'

  @HostBinding('style.backgroundColor') backgroundColor!: string;
  //@HostBinding('style.color') color!: string;
  constructor() { }

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
  }

}
