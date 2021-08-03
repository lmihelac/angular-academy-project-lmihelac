import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MyProfileComponent  {

  constructor(private authservice: AuthService) { }

  public getEmail() {
    return this.authservice.getAuthData()
  }



}
