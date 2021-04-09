import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookingComponent } from './hotel/booking/booking.component';
import { HotelMapComponent } from './hotel/hotel-browser/hotel-map/hotel-map.component';
import { HotelSearchComponent } from './hotel/hotel-browser/hotel-search/hotel-search.component';
import { SliderComponent } from './landing-page/slider/slider.component';
import { LoginComponent } from './profile/login/login.component';
import { RegistrationComponent } from './profile/registration/registration.component';

const routes: Routes = [
  { path: '', component: SliderComponent },
  { path: 'map', component: HotelMapComponent },
  { path: 'book', component: BookingComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
