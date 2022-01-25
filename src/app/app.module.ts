import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { BrowseComponent } from './components/browse/browse.component';
import { FilterButtonsComponent } from './components/filter-buttons/filter-buttons.component';
import { TowerEventComponent } from './components/tower-event/tower-event.component';
import { EventDetailsComponent } from './pages/event-details/event-details.component';
import { AccountComponent } from './pages/account/account.component';
import { EventHeaderComponent } from './components/event-header/event-header.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SidenavComponent,
    BrowseComponent,
    FilterButtonsComponent,
    TowerEventComponent,
    EventDetailsComponent,
    AccountComponent,
    EventHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
