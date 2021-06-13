import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookingComponent } from './hotel/booking/booking.component';
import { HotelMapComponent } from './hotel/hotel-browser/hotel-map/hotel-map.component';
import { SliderComponent } from './landing-page/slider/slider.component';
import { LoginComponent } from './profile/login/login.component';
import { ProfileComponent } from './profile/profile/profile.component';
import { TosComponent } from './tos/tos.component';


export const routes: Routes = [
  { path: '', component: SliderComponent},
  { path: 'results/:id', component: BookingComponent },
  { path: 'results', component: HotelMapComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'tos', component: TosComponent },
  { path: '**', component: SliderComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
