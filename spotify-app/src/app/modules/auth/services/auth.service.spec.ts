import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';
import * as mockRaw from '@data/user.json';
import { CookieService } from 'ngx-cookie-service';
import { of } from 'rxjs';

describe('AuthService', () => {
  let service: AuthService;
  let mockUser: any = (mockRaw as any).default;
  let mockCookieService;
  let httpClientSpy: { post: jasmine.Spy };

  beforeEach(() => {
    mockCookieService = jasmine.createSpyObj('CookieService', ['get','check', 'set', 'delete']);
    mockCookieService.check.and.returnValue(true);

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        { provide: CookieService, useValue: mockCookieService }
      ]
    });

    httpClientSpy = jasmine.createSpyObj('HttpClient', ['post'])
    service = new AuthService(httpClientSpy as any, mockCookieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // TODO: Prueba del sendCredentials
  it('Debe de retornar un onjeto con "data" y "tokenSession"',() => {
    // Arrange

    const user:any = mockUser.userOk
    const mockResponse = {
      data: {},
      tokenSession: '0x0x0x'
    }

    httpClientSpy.post.and.returnValue(
      of(mockResponse) // TODO: ✔ ya es observable
    )

    // Act
    service.sendCredentials(user.email, user.password)
      .subscribe(responseApi => {
        const getProperties = Object.keys(responseApi)
        expect(getProperties).toContain('data')
        expect(getProperties).toContain('tokenSession')
      })
  })

  it('Test de suma', () => {
    const a = 2
    const b = 3


    const c = service.suma(a,b)

    expect(c).toEqual(5)
  })

});
