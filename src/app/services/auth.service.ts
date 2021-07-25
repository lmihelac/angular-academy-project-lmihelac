import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { RegistrationFormData } from '../pages/registration-container/components/registration-form/registration-form.component';
import { LoginFormData } from '../pages/login-container/components/login-form/login-form.component';
import { tap } from 'rxjs/operators';
import { AuthData } from '../interfaces/auth-data.interface';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly authDataKey = 'authData';

  public isLoggedIn$: BehaviorSubject<boolean> = new BehaviorSubject(Boolean(this.getAuthData()));

  constructor(private http: HttpClient, private storage: StorageService) {}

  public onRegister({email, password, passwordConfirmation}: RegistrationFormData): Observable<RegistrationFormData> {
  return this.http.post<RegistrationFormData>('https://tv-shows.infinum.academy/users', {
    email,
    password,
    password_confirmation : passwordConfirmation,
  })
  }


  public logIn(loginData: LoginFormData): Observable<any> {
    return this.http.post<HttpResponse<any>>('https://tv-shows.infinum.academy/users/sign_in', loginData, { 
      observe: 'response'}).pipe(
        tap((response: HttpResponse<any>) => { //trebalo bi typeat sa login responseom
         // console.log(response); log server responsea

          const token: string | null = response.headers.get('access-token');
          const client: string | null = response.headers.get('client');
          const uid: string | null = response.headers.get('uid');

          //console.log(token, client, uid);

          if(token && client && uid) {
            this.saveAuthData({token, client, uid});
            this.isLoggedIn$.next(true);
          }
        })
      );
    }


    private saveAuthData(authData : AuthData): void {
      this.storage.add(this.authDataKey, authData);
    }

    public getAuthData(): AuthData | null {
      return this.storage.get(this.authDataKey);
    }

    public logOut(): void {
      this.storage.remove(this.authDataKey);
      this.isLoggedIn$.next(false);
    }

}
