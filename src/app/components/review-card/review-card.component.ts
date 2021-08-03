import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Review } from 'src/app/services/review.model';

@Component({
  selector: 'app-review-card',
  templateUrl: './review-card.component.html',
  styleUrls: ['./review-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReviewCardComponent  {
  constructor(private authservice: AuthService) {}
  
  @Input() comment: string;
	@Input() rating: number;

  public userEmail() {
    return this.authservice.getAuthData()?.uid;
  }
}
