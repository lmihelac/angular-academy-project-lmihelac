import { Component,  ChangeDetectionStrategy, Input } from '@angular/core';
import { Show } from 'src/app/services/show.model';
import { Review } from 'src/app/services/review.model';
import { ActivatedRoute } from '@angular/router';
import { merge, Observable, of, Subject, throwError } from 'rxjs';
import { map, switchMap } from 'rxjs/internal/operators';
import { ReviewService } from 'src/app/services/review.service';


@Component({
  selector: 'app-show-detail',
  templateUrl: './show-detail.component.html',
  styleUrls: ['./show-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShowDetailComponent {

  @Input() show: Show;

  @Input() review: Array<Review>;

}
