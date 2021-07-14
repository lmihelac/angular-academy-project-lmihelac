import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllShowsContainerComponent } from './components/all-shows-container/all-shows-container.component';
import { MainLayoutComponentComponent } from './components/main-layout-component/main-layout-component.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { TopRatedShowsComponent } from './components/top-rated-shows/top-rated-shows.component';

const routes: Routes = 
[
{ 
	path: '', 
	component: MainLayoutComponentComponent ,
	children: [
	{
		path: '',
		component: AllShowsContainerComponent
	},
	{
		path: 'top-rated',
		component: TopRatedShowsComponent
	},
	]
},

];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
