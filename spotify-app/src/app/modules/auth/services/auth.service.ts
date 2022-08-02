import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly URL = environment.api;
  constructor(private http: HttpClient, private cookie: CookieService) {}

  sendCredentials(email: string, password: string): Observable<any> {
    const body = {
      email,
      password,
    };
    return this.http.post(`${this.URL}/auth/login`, body).pipe(
      tap((responseOK: any) => {
        const { tokenSession, data } = responseOK;
        this.cookie.set('token_service', tokenSession, 4, '/');
        catchError((err) => {
          const { status, statusText } = err;
          return of([]);
        });
      })
    );
  }

  suma(a: number, b: number): number {
    return a + b
  }
}
