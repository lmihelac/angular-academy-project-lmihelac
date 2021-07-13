import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
		path: 'topratedshows',
		component: TopRatedShowsComponent
	}
	]
},
{ 
	path: 'sidenav', 
	component: SidenavComponent },

];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
