import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HrRootComponent } from './hr-root/hr-root.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SliderComponent } from './landing-page/slider/slider.component';
import { HotelSearchComponent } from './hotel/hotel-browser/hotel-search/hotel-search.component';
import { HotelMapComponent } from './hotel/hotel-browser/hotel-map/hotel-map.component';
import { HotelListComponent } from './hotel/hotel-browser/hotel-list/hotel-list.component';
import { Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslatePipe } from '../pipes/translate-pipe';
import { LoginComponent } from './profile/login/login.component';
import { BookingComponent } from './hotel/booking/booking.component';
import { ProfileComponent } from './profile/profile/profile.component';
import { TosComponent } from './tos/tos.component';

@NgModule({
  declarations: [
    HrRootComponent,
    NavbarComponent,
    // SliderComponent,
    HotelSearchComponent,
    HotelMapComponent,
    TranslatePipe,
    HotelListComponent,
    LoginComponent,
    BookingComponent,
    ProfileComponent,
    TosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [HrRootComponent]
})
export class AppModule { }
