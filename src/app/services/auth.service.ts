import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RegistrationFormData } from '../pages/registration-container/components/registration-form/registration-form.component';
import { LoginFormData } from '../pages/login-container/components/login-form/login-form.component';

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
  public onLogin({email, password}: LoginFormData): Observable<LoginFormData> {
    return this.http.post<LoginFormData>('https://tv-shows.infinum.academy/users/sign_in', {
      email,
      password,
    })
    }
}
