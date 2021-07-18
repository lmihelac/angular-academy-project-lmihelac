import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ILink } from 'src/app/interfaces/link.interface';

@Component({
	selector: 'app-sidenav',
	templateUrl: './sidenav.component.html',
	styleUrls: ['./sidenav.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidenavComponent  {
public	links: Array<ILink> = [
		{
			url: '',
			title: 'All shows' 
		},
		{
			url: '/my-profile',
			title: 'My profile' 
		},
		{
			url: '/top-rated',
			title: 'Top rated shows' 
		}
	];
}
