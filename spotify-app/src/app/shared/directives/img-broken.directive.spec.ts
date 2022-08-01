import { ElementRef } from '@angular/core';
import { ImgBrokenDirective } from './img-broken.directive';


// TODO: la prueba de ImgBroken es la siguiente

describe('ImgBrokenDirective', () => {
  // TODO: Deberia instanciar correctamente
  const mockElement = new ElementRef('')
  it('should create an instance', () => {
    const directive = new ImgBrokenDirective(mockElement);
    expect(directive).toBeTruthy();
  });
});
