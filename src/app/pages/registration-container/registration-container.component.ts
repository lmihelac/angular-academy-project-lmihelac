import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';
import { RegistrationFormData, } from './components/registration-form/registration-form.component';

@Component({
  selector: 'app-registration-container',
  templateUrl: './registration-container.component.html',
  styleUrls: ['./registration-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegistrationContainerComponent {
  public isLoading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private authService: AuthService, private router: Router) {}

  public onRegister(registrationFormData: RegistrationFormData): void {
    this.isLoading$.next(true);
    this.authService.onRegister(registrationFormData).pipe(
      finalize(() => {
        this.isLoading$.next(false);
      }),
    ).subscribe((registrationFormData: RegistrationFormData) => {
      console.log(registrationFormData); //log server responsea
      this.router.navigate(['']);
    });
  }

}
