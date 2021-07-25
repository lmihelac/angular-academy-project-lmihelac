import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllShowsContainerComponent } from './pages/all-shows-container/all-shows-container.component';

import { MainLayoutComponentComponent } from './components/main-layout-component/main-layout-component.component';
import { MyProfileComponent } from './pages/my-profile/my-profile.component';

import { ShowDetailContainerComponent } from './pages/show-detail-container/show-detail-container.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { TopRatedShowsComponent } from './pages/top-rated-shows/top-rated-shows.component';
import { FormLayoutComponent } from './components/form-layout/form-layout.component';
import { RegistrationContainerComponent } from './pages/registration-container/registration-container.component';
import { LoginContainerComponent } from './pages/login-container/login-container.component';
import { AppGuard } from './app.guard';

const routes: Routes = 
[
{ 
	path: '', 
	component: MainLayoutComponentComponent ,
	children: [
	{ path: '', component: AllShowsContainerComponent, /*canActivate: [AppGuard]*/ },
	{ path: 'top-rated', component: TopRatedShowsComponent },
	{ path: 'show/:id', component: ShowDetailContainerComponent},
	{ path: 'my-profile', component: MyProfileComponent },
	],
	/*canActivate: [AppGuard]*/
},

{ 
	path: '', 
	component: FormLayoutComponent ,
	children: 
	[
	{
		path: 'registration', component: RegistrationContainerComponent
	},
	{
		path: 'login', component: LoginContainerComponent
	},

	]
},



{
	path: '**', redirectTo: ''
},

];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
