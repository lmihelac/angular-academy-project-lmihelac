import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { RegisterService } from 'src/app/services/register.service';
import { RegistrationFormData, } from './components/registration-form/registration-form.component';

@Component({
  selector: 'app-registration-container',
  templateUrl: './registration-container.component.html',
  styleUrls: ['./registration-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegistrationContainerComponent {
  constructor(private authService: AuthService) {}

  public onRegister(registrationFormData: RegistrationFormData): void {
    console.log(registrationFormData);
    this.authService.onRegister(registrationFormData).subscribe();
  }

}
