import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Review } from 'src/app/services/review.model';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/internal/operators';
import { ReviewService } from 'src/app/services/review.service';
import { IReview } from 'src/app/interfaces/review.interface';



@Component({
  selector: 'app-reviews-container',
  templateUrl: './reviews-container.component.html',
  styleUrls: ['./reviews-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReviewsContainerComponent {

  @Input() review: Array<Review>;

  constructor(private route: ActivatedRoute, private reviewService: ReviewService) { }

  public review$: Observable<Array<Review>> = this.route.paramMap.pipe(
		switchMap((paramMap) => {
			const id: string | null = paramMap.get('id');

			if (id) {
				return this.reviewService.getShowReviews(id);
			}

			return of([]);
		})
	);
}
