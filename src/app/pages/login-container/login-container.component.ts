import { HttpResponse } from '@angular/common/http';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';
import { LoginFormData } from './components/login-form/login-form.component';

@Component({
  selector: 'app-login-container',
  templateUrl: './login-container.component.html',
  styleUrls: ['./login-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginContainerComponent {
  public isLoading$: Subject<boolean> = new Subject();

  constructor(private authService: AuthService, private router: Router) {}

  public onLogin(loginData: LoginFormData): void {
    this.isLoading$.next(true);
    this.authService.logIn(loginData).pipe(
      finalize(() => this.isLoading$.next(false)),
    ).subscribe(() => {
      this.router.navigate(['']);
    });
  }



}
