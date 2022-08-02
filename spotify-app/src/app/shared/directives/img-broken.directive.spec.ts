import { Component, ElementRef } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ImgBrokenDirective } from './img-broken.directive';


// TODO: Componente de prueba ✔
@Component({
  template: '<img class="testing-directive" appImgBroken [src]="srcMock">'
})

class TestComponent {
  public srcMock: any = null;
}


// TODO: la prueba de ImgBroken es la siguiente

describe('ImgBrokenDirective', () => {

  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestComponent,
        ImgBrokenDirective
      ],
    })

    fixture = TestBed.createComponent(TestComponent)
    component = fixture.componentInstance;
    fixture.detectChanges()
  })

  // TODO: Deberia instanciar correctamente
  const mockElement = new ElementRef('')
  it('should create an instance', () => {
    const directive = new ImgBrokenDirective(mockElement);
    expect(directive).toBeTruthy();
  });

  it('TestComponent deberia instanciarse correctamente',() => {
    expect(component).toBeTruthy()
  });

  it('Directiva deberia de camnbiar la imagen en caso de que no se encuentre la primer imagen', (done: DoneFn) => {
    // Arrange
    const beforeImgElement = fixture.debugElement.query(By.css('.testing-directive')).nativeElement
    const beforeImgSrc = beforeImgElement.src // TODO: Tenemos la url antes de ser cambiada por la directiva
    component.srcMock = undefined

    setTimeout(() => {
    const afterImgElement = fixture.debugElement.query(By.css('.testing-directive')).nativeElement
    const afterImgSrc = afterImgElement.src // TODO: Tenemos la url despues de ser cambiada por la directiva

    expect(afterImgSrc).toContain('/assets/')
    done()
    }, 3000)
  });
});
