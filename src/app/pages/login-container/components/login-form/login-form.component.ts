import { Component, ChangeDetectionStrategy, Output,EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


export interface LoginFormData {
  email: string;
  password: string;
}

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginFormComponent {

  @Output() login: EventEmitter<LoginFormData> = new EventEmitter();

  public loginFormGroup: FormGroup = new FormGroup(
    {
    email: new FormControl('',[Validators.required, Validators.email,]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    }
  );

  public onLogin(): void {
    this.login.emit(this.loginFormGroup.value);
    //console.log(this.loginFormGroup.value);
    this.loginFormGroup.reset();

  }
}
