import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Show } from 'src/app/services/show.model';
import { ShowService } from 'src/app/services/show.service';
import { merge, Observable, of } from 'rxjs';
import { switchMap, map, subscribeOn } from 'rxjs/internal/operators';
import { ReviewService } from 'src/app/services/review.service';
import { Review } from 'src/app/services/review.model';
import { IReviewFormData} from 'src/app/components/review-form/review-form.component';


@Component({
  selector: 'app-show-detail-container',
  templateUrl: './show-detail-container.component.html',
  styleUrls: ['./show-detail-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShowDetailContainerComponent  {

  constructor(private route: ActivatedRoute, private showService: ShowService, private reviewService: ReviewService) { }

  public show$: Observable<Show | null> = this.route.paramMap.pipe(
		map((paramMap)=> {return paramMap.get('id')}),
		switchMap((id) => {
			if (id) {
				return this.showService.getShow(id);
			}

			return of(null);
		})
	);


  public review$: Observable<Array<Review>> = this.route.paramMap.pipe(
		switchMap((paramMap) => {
			const id: string | null = paramMap.get('id');
			if (id) {
				return this.reviewService.getReviews(id);
				
			}
				return of([]);
				
		})
	);


	public onReviewAdd(reviewFormData: IReviewFormData): void {
		const id: string | null  = this.route.snapshot.paramMap.get('id');//ovo se aktivira
		if(!id){
			return
		}
		console.log(id);
    this.reviewService.onReviewAdd(reviewFormData, id)
		// console.log(this.reviewService.onReviewAdd(reviewFormData, id))

  }





}
