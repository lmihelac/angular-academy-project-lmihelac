import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainLayoutComponentComponent } from './main-layout-component.component';

describe('MainLayoutComponentComponent', () => {
	let component: MainLayoutComponentComponent;
	let fixture: ComponentFixture<MainLayoutComponentComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [MainLayoutComponentComponent],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(MainLayoutComponentComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
