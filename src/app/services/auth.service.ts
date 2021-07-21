import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { RegistrationFormData } from '../pages/registration-container/components/registration-form/registration-form.component';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

public onRegister(registrationData: RegistrationFormData): Observable<RegistrationFormData> {
 return of(registrationData);
}
}
