import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainLayoutComponentComponent } from './components/main-layout-component/main-layout-component.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AllShowsContainerComponent } from './pages/all-shows-container/all-shows-container.component';

@NgModule({
	declarations: [AppComponent, MainLayoutComponentComponent, SidenavComponent, AllShowsContainerComponent],
	imports: [BrowserModule, BrowserAnimationsModule, MatCardModule, MatSidenavModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
