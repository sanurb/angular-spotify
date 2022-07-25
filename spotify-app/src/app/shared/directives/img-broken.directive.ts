import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: 'img[appImgBroken]' // la etiqueta html -> img seria el Host
})
export class ImgBrokenDirective {
  @Input() customImg: string = '' // de esta forma podemos pasar propiedades a una directiva
  @HostListener('error') handleError():void {
    const elNative = this.elHost.nativeElement;
    console.log('🔴 Esta imagen revento -->', this.elHost);
    elNative.src = '../../../assets/imgbroken_loading.gif'
    // elNative.src = this.customImg
  }

  constructor(private elHost: ElementRef) {

  }

}
