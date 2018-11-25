import { Directive, ElementRef, Renderer, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appInfoTrack]'
})
export class InfoTrackDirective {

  public isHide: boolean;

  constructor(
    private el: ElementRef,
    private renderer: Renderer
  ) {
  }

  @HostListener('click') onClick() {
    const selector = this.el.nativeElement.querySelector('.track-menu');
    if (this.isHide) {
      this.renderer.setElementStyle(selector, 'display', 'block');
      this.isHide = false;
    } else {
      this.renderer.setElementStyle(selector, 'display', 'none');
      this.isHide = true;

    }
  }


}
