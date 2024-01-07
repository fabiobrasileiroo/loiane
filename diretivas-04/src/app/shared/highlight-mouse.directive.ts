import { Directive, HostListener, 
  ElementRef, Renderer2,
  HostBinding} from '@angular/core';

@Directive({
  selector: '[HighlightMouse]'
})
export class HighlightMouseDirective {
  @HostListener('mouseenter') OnMouseOver() {
    /*
    this._renderer.setStyle(
      this._elementRef.nativeElement,
      'background-color','yellow'
    )
    */
    this.backgroundColor = 'yellow'
  }
  @HostListener('mouseleave') onMouseLeave() {
    /*
    this._renderer.setStyle(
      this._elementRef.nativeElement,
      'background-color',' '
      )
      */
    this.backgroundColor = ''
  }

 //@HostBinding('style.backgroundColor') backgroundColor!: string;
 @HostBinding('style.backgroundColor') get setColor() {
  return this.backgroundColor
 }
 private backgroundColor!: string;

  constructor( /*private _elementRef: ElementRef,
    private _renderer: Renderer2 */) { }

}

//constructor( private _elementRef: ElementRef, private _renderer: Renderer2 )  {
//  this._renderer.setStyle(_elementRef.nativeElement, 'background-color', 'yellow');
//}