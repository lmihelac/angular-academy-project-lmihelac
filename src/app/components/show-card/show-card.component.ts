import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Show } from 'src/app/services/show.model';

@Component({
	selector: 'app-show-card',
	templateUrl: './show-card.component.html',
	styleUrls: ['./show-card.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShowCardComponent {
	@Input() title: string;
	@Input() imageUrl: string;
	@Input() rating: number;
}
