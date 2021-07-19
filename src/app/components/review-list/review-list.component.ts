import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Review } from 'src/app/services/review.model';

@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReviewListComponent {

	@Input() review: Array<Review>;

}
