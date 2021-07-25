import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatProgressBarModule } from '@angular/material/progress-bar';



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
import { FormLayoutComponent } from './components/form-layout/form-layout.component';
import { RegistrationContainerComponent } from './pages/registration-container/registration-container.component';
import { RegistrationFormComponent } from './pages/registration-container/components/registration-form/registration-form.component';
import { LoginContainerComponent } from './pages/login-container/login-container.component';
import { LoginFormComponent } from './pages/login-container/components/login-form/login-form.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { AuthErrorInterceptor } from './interceptors/auth-error.interceptor';


@NgModule({
	declarations: 
  [
		AllShowsContainerComponent,
		AppComponent,
		MainLayoutComponentComponent,
		ShowCardComponent,
		ShowListComponent,
		SidenavComponent,
    FormLayoutComponent,
    LoginContainerComponent,
    LoginFormComponent,
    MyProfileComponent,
    RatingComponent,
    RegistrationContainerComponent,
    RegistrationFormComponent,
    ReviewCardComponent,
    ReviewListComponent,
    ShowDetailComponent,
    ShowDetailContainerComponent,
    TopRatedShowsComponent,
  ],
	imports: 
  [
    AppRoutingModule,
    BrowserAnimationsModule, 
    BrowserModule, 
    HttpClientModule,
    MatButtonModule,
    MatCardModule, 
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatProgressBarModule,
    MatSidenavModule, 
    ReactiveFormsModule,
    
  ],
	providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthErrorInterceptor,
      multi: true,
    },
  ],
	bootstrap: [AppComponent],
})
export class AppModule {}
