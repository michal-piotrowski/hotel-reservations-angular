import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HrRootComponent } from './hr-root/hr-root.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SliderComponent } from './landing-page/slider/slider.component';
import { HotelSearchComponent } from './hotel/hotel-browser/hotel-search/hotel-search.component';
import { HotelMapComponent } from './hotel/hotel-browser/hotel-map/hotel-map.component';
import { HotelListComponent } from './hotel/hotel-browser/hotel-list/hotel-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslatePipe } from '../pipes/translate-pipe';
import { DynamicComponent, LoginComponent } from './profile/login/login.component';
import { BookingComponent } from './hotel/booking/booking.component';
import { ProfileComponent } from './profile/profile/profile.component';
import { TosComponent } from './tos/tos.component';
import { SuggestionsComponent } from './inputWithSuggestions/suggestions.component';
import { reducers } from '../store/store';
import { HttpEffects } from '../store/store';
import { StoreModule } from '@ngrx/store';
import { AsyncPipe } from '@angular/common';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { HttpService } from '../http/http.service';
import { HotelSummary } from './hotel/hotel-browser/hotel/hotel-summary.component';
import { LoginFormComponent } from './profile/loginForm/login-form.component';
import { RegistrationFormComponent } from './profile/registrationForm/registration-form.component';

@NgModule({
  declarations: [
    SuggestionsComponent,
    HrRootComponent,
    NavbarComponent,
    SliderComponent,
    HotelSearchComponent,
    HotelMapComponent,
    TranslatePipe,
    HotelListComponent,
    LoginComponent,
    LoginFormComponent,
    RegistrationFormComponent,
    BookingComponent,
    ProfileComponent,
    TosComponent,
    HotelSummary,
    DynamicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([HttpEffects])
  ],
  providers: [AsyncPipe,  HttpService],
  bootstrap: [HrRootComponent]
})
export class AppModule { }
