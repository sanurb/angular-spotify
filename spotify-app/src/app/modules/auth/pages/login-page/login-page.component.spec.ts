import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

import { LoginPageComponent } from './login-page.component';

describe('LoginPageComponent', () => {
  let component: LoginPageComponent;
  let fixture: ComponentFixture<LoginPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ],
      declarations: [ LoginPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // TODO: Debe de asegurarse que el formulario sea invalido cuando ingrese dato erroneos
  it('🔴 Deberia de retornar "invalido" el formulario', () => {
    // patrón AAA: Unit Testing
    // Arrange => inicializa los objetos y establece los valores de los datos que vamos a utilizar en el Test que lo contiene.
    const mockCredentials = {
      email: '0x0x0x0x0x0',
      password: '123456789012345678'
    }

    const emailForm: any = component.formLogin.get('email')
    const passwordForm: any = component.formLogin.get('password')

    // Act => realiza la llamada al método a probar con los parámetros preparados para tal fin.

    emailForm.setValue(mockCredentials.email)
    passwordForm.setValue(mockCredentials.password)


    // Assert => comprueba que el método de pruebas ejecutado se comporta tal y como teníamos previsto que lo hiciera.

    expect(component.formLogin.invalid).toEqual(true);
  });

  it('✔✔ Deberia de retornar "valido" el formulario', () => {

    // Arrange
    const mockCredentials = {
      email: 'test@test.com',
      password: '12345678'
    }

    const emailForm: any = component.formLogin.get('email')
    const passwordForm: any = component.formLogin.get('password')

    // Act

    emailForm.setValue(mockCredentials.email)
    passwordForm.setValue(mockCredentials.password)


    // Assert

    expect(component.formLogin.invalid).toEqual(false);
  });


  it('👍 El boton deberia de tener la palabra "Iniciar sesión"', () => {
    const elementRef = fixture.debugElement.query(By.css('.form-action button'))
    const getInnerText = elementRef.nativeElement.innerText

    expect(getInnerText).toEqual('Iniciar sesión')
  })
});
