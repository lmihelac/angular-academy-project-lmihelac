import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RegistrationFormData } from '../pages/registration-container/components/registration-form/registration-form.component';
import { LoginFormData } from '../pages/login-container/components/login-form/login-form.component';
import { tap } from 'rxjs/operators';
import { AuthData } from '../interfaces/auth-data.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {}

  public onRegister({email, password, passwordConfirmation}: RegistrationFormData): Observable<RegistrationFormData> {
  return this.http.post<RegistrationFormData>('https://tv-shows.infinum.academy/users', {
    email,
    password,
    password_confirmation : passwordConfirmation,
  })
  }
  public onLogin(loginData: LoginFormData): Observable<any> {
    return this.http.post<HttpResponse<any>>('https://tv-shows.infinum.academy/users/sign_in', loginData, { 
      observe: 'response'}).pipe(
        tap((response: HttpResponse<any>) => { //trebalo bi typeat sa login responseom
          console.log(response); //log server responsea
          const token: string | null = response.headers.get('access-token');
          const client: string | null = response.headers.get('client');
          const uid: string | null = response.headers.get('uid');
          console.log(token, client, uid);
        })
      );
    }

    private saveAuthData(authData : AuthData): void {

    }
}
