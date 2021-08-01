import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
	host: {class: 'shows-app'},
})
export class AppComponent {
	title: string = 'TV Show App';
}
