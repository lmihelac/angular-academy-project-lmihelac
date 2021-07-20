import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginFormComponent {

  public loginFormGroup: FormGroup = new FormGroup(
    {
    email: new FormControl(''),
    password: new FormControl(''),
    }
  );

}
