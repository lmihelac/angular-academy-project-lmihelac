import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainLayoutComponentComponent } from './components/main-layout-component/main-layout-component.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AllShowsContainerComponent } from './components/all-shows-container/all-shows-container.component';
import { ShowListComponent } from './components/show-list/show-list.component';
import { ShowCardComponent } from './components/show-card/show-card.component';
import { RatingComponent } from './components/rating/rating.component';
import { AppRoutingModule } from './app-routing.module';
import { TopRatedShowsComponent } from './components/top-rated-shows/top-rated-shows.component';
import { ShowDetailContainerComponent } from './components/show-detail-container/show-detail-container.component';
import { ShowDetailComponent } from './components/show-detail/show-detail.component';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { ReviewsContainerComponent } from './components/reviews-container/reviews-container.component';
import { ReviewDetailComponent } from './components/review-detail/review-detail.component';

@NgModule({
	declarations: [
		AppComponent,
		MainLayoutComponentComponent,
		SidenavComponent,
		AllShowsContainerComponent,
		ShowListComponent,
		ShowCardComponent,
  RatingComponent,
  TopRatedShowsComponent,
  ShowDetailContainerComponent,
  ShowDetailComponent,
  MyProfileComponent,
  ReviewsContainerComponent,
  ReviewDetailComponent,
	],
	imports: [BrowserModule, BrowserAnimationsModule, MatCardModule, MatSidenavModule, AppRoutingModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
