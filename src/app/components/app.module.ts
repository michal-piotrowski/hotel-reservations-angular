import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HrRootComponent } from './hr-root/hr-root.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SliderComponent } from './landing-page/slider/slider.component';
import { FormComponent } from './landing-page/form/form.component';
import { HotelSearchComponent } from './hotel/hotel-browser/hotel-search/hotel-search.component';
import { HotelMapComponent } from './hotel/hotel-browser/hotel-map/hotel-map.component';
import { HotelListComponent } from './hotel/hotel-browser/hotel-list/hotel-list.component';
import { HotelComponent } from './hotel/hotel-browser/hotel/hotel.component';
import { Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslatePipe } from '../pipes/translate-pipe';
import { LoginComponent } from './profile/login/login.component';
import { RegistrationComponent } from './profile/registration/registration.component';
import { BookingComponent } from './hotel/booking/booking.component';

@NgModule({
  declarations: [
    HrRootComponent,
    NavbarComponent,
    // SliderComponent,
    // FormComponent,
    HotelSearchComponent,
    HotelMapComponent,
    TranslatePipe,
    HotelListComponent,
    LoginComponent,
    RegistrationComponent,
    BookingComponent,
    // HotelComponent
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
