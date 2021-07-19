import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Show } from 'src/app/services/show.model';
import { ShowService } from 'src/app/services/show.service';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/internal/operators';


@Component({
  selector: 'app-show-detail-container',
  templateUrl: './show-detail-container.component.html',
  styleUrls: ['./show-detail-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShowDetailContainerComponent  {

  constructor(private route: ActivatedRoute, private showService: ShowService) { }

  public show$: Observable<Show | null> = this.route.paramMap.pipe(
		switchMap((paramMap) => {
			const id: string | null = paramMap.get('id');

			if (id) {
				return this.showService.getShow(id);
			}

			return of(null);
		})
	);


}
