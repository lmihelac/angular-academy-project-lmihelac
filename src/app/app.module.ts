import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainLayoutComponentComponent } from './components/main-layout-component/main-layout-component.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AllShowsContainerComponent } from './pages/all-shows-container/all-shows-container.component';
import { ShowListComponent } from './components/show-list/show-list.component';
import { ShowCardComponent } from './components/show-card/show-card.component';
import { RatingComponent } from './components/rating/rating.component';
import { AppRoutingModule } from './app-routing.module';
import { TopRatedShowsComponent } from './pages/top-rated-shows/top-rated-shows.component';
import { ShowDetailContainerComponent } from './pages/show-detail-container/show-detail-container.component';
import { ShowDetailComponent } from './pages/show-detail-container/components/show-detail/show-detail.component';
import { MyProfileComponent } from './pages/my-profile/my-profile.component';
import { ReviewListComponent } from './components/review-list/review-list.component';
import { ReviewCardComponent } from './components/review-card/review-card.component';


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
  ReviewListComponent,
  ReviewCardComponent,
],
	imports: [BrowserModule, BrowserAnimationsModule, MatCardModule, MatSidenavModule, AppRoutingModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
