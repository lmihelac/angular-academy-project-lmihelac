import { Component, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


export interface RegistrationFormData {
  email: string;
  password: string;
  passwordConfirmation: string;
}

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegistrationFormComponent {

  @Output() register: EventEmitter<RegistrationFormData> = new EventEmitter();

  
  public registrationFormGroup: FormGroup = new FormGroup(
    {
    email: new FormControl('', [Validators.required, Validators.email,]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    passwordConfirmation: new FormControl('', [Validators.required, Validators.minLength(8)]),
    }
  );

  public onRegister(): void {
    this.register.emit(this.registrationFormGroup.value);
    //console.log(this.registrationFormGroup.value);
    this.registrationFormGroup.reset();
  }


  }

  

