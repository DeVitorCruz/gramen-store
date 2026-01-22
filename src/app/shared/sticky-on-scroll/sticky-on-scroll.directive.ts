import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { stickyList } from './sticky-list';

@Directive({
  selector: '[appStickyOnScroll]'
})
export class StickyOnScrollDirective {

  public stickyList = stickyList;

  constructor(private el: ElementRef, private renderer: Renderer2) { }
  
  @HostListener('window:scroll') public onScroll(): void {
    if(window.scrollY > 0) {
      for (let sticky of this.stickyList) {
        this.activeClass(sticky);
      }
    } else {
      for (let sticky of this.stickyList) {
        this.turnoffClass(sticky);
      }
    }
  } 

  public activeClass(classLabel: string): void {
    this.renderer.addClass(this.el.nativeElement, classLabel);
  }

  public turnoffClass(classLabel: string): void {
    this.renderer.removeClass(this.el.nativeElement, classLabel)
  }
}
