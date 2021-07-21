import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginFormComponent {

  public loginFormGroup: FormGroup = new FormGroup(
    {
    email: new FormControl('',[Validators.required, Validators.email,]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    }
  );

  public onLogin(): void {
    //console.log(this.loginFormGroup.value);
    this.loginFormGroup.reset();

  }
}
