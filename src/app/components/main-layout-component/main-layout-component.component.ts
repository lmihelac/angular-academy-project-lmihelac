import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
	selector: 'app-main-layout-component',
	templateUrl: './main-layout-component.component.html',
	styleUrls: ['./main-layout-component.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainLayoutComponentComponent {

	constructor(private authService: AuthService, private router: Router) {}
	
	public logOut(): void {
		this.authService.logOut();
		this.router.navigate(['/login'])
	}


	isMobile: boolean = true;
	x = window.matchMedia("(max-width: 700px)")
	public mobileToggle(x: any) {
		if(x) {
			this.isMobile=true;
			console.log(window.matchMedia("(max-width: 700px)"))
		}

	}


	
}

