import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { AuthData } from '../interfaces/auth-data.interface';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const authData: AuthData | null = this.authService.getAuthData();

    let finalRequest: HttpRequest<unknown> = request;

    if (authData) {
      finalRequest = request.clone({
        headers: new HttpHeaders({
          token: authData.token,
          client: authData.client,
          uid: authData.uid,
        })
      })
    }
    console.log('old', request.headers.get('token'));
    console.log('new', finalRequest.headers.get('token'))


    return next.handle(finalRequest);
  }
}