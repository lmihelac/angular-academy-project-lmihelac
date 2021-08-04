import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Show } from 'src/app/services/show.model';
import { ShowService } from 'src/app/services/show.service';
import { combineLatest, merge, Observable, of, Subject, throwError } from 'rxjs';
import { switchMap, map, subscribeOn, switchMapTo } from 'rxjs/internal/operators';
import { ReviewService } from 'src/app/services/review.service';
import { Review } from 'src/app/services/review.model';
import { IReviewFormData} from 'src/app/components/review-form/review-form.component';
import { trigger } from '@angular/animations';

interface ItemplateData {
	show: Show,
	reviews: Array<Review>,
}

@Component({
  selector: 'app-show-detail-container',
  templateUrl: './show-detail-container.component.html',
  styleUrls: ['./show-detail-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShowDetailContainerComponent  {

  constructor(private route: ActivatedRoute, private showService: ShowService, private reviewService: ReviewService) { }

	public templateData$: Observable<ItemplateData> = this.route.paramMap.pipe(
		switchMap((paramMap) => {
			const id: string | null = paramMap.get('id');
			if(!id) {
				return throwError("no id");
			}
			return combineLatest([this.showService.getShow(id),this.reviewService.getReviews(id)])
		}),
		map(([show, reviews]: [Show,Array<Review>]) => {
			return {show, reviews}
		})

	)



	public onReviewAdd(reviewFormData: IReviewFormData): void {
		const id: string | null  = this.route.snapshot.paramMap.get('id');
		if(!id){
			return
		}
		console.log(id);
    this.reviewService.onReviewAdd(reviewFormData, id).subscribe()
  }


}
