import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Show } from 'src/app/services/show.model';
import { ShowService } from 'src/app/services/show.service';
import { Observable, } from 'rxjs';

@Component({
  selector: 'app-top-rated-shows',
  templateUrl: './top-rated-shows.component.html',
  styleUrls: ['./top-rated-shows.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TopRatedShowsComponent {

public shows$: Observable<Array<Show>> = this.showService.getTopRatedShows();

constructor(private showService: ShowService) {}

}
