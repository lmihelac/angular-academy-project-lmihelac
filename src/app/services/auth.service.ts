import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IRawUser,} from '../interfaces/user.interface';
import { RegistrationFormData } from '../pages/registration-container/components/registration-form/registration-form.component';
import { User } from './user.model';
import { map } from 'rxjs/operators';
import { LoginFormData } from '../pages/login-container/components/login-form/login-form.component';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {}

  public onRegister(registrationData: RegistrationFormData): Observable<RegistrationFormData> {
  return this.http.post<RegistrationFormData>('https://tv-shows.infinum.academy/users', registrationData)
  }
  public onLogin(loginData: LoginFormData): Observable<LoginFormData> {
    return this.http.post<LoginFormData>('https://tv-shows.infinum.academy/users/sign_in', loginData)
    }
}
