import { AsyncPipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import routerNames from 'src/app/components/routerNames';
import { HrTool } from 'src/app/helpers/HrTool';
import { FormFields, HrState, IFormFields, selectors, SET_SELECTED_HOTEL_INDEX } from 'src/app/store/store';

@Component({
  selector: 'app-hotel-summary',
  styleUrls: ['./hotel-summary.component.scss'],
  template: `
    <div (click)="store.dispatch(SET_SELECTED_HOTEL_INDEX({index: arrayPos}))">
    <div [ngClass]="[expanded() ? 'selected-hotel-row' : 'unselected-hotel-row', 'hotel-row']">
      <div class="row">
        <div id="hotel-thumb-wrapper">
          <img id="hotel-img-thumb" src="assets/map/distance-ico-path.png">
        </div>
        <div class="col-md-9 summary">
          <h3 for="search-input" [innerHTML]="hotelSummary.caption" class="hotel-info-label"></h3>
          <div class="hotel-info-label">
            <img id="distance-icon" src="assets/map/distance-ico-no-bg.png">
            <label for="search-input">{{distanceFromSearched()}}m from searched location in a straight line</label>
          </div>
          <div class="hotel-info-label">
            <img id="place-icon" src="assets/map/place.png">
            <label for="search-input">{{formattedGeo()}}</label>
          </div>
        </div>
      </div>
      <hr *ngIf="expanded()"/>
      <div *ngIf="expanded()" id="book-btn-wrapper">
        <button id="book-now-btn" class="btn btn-primary">Book now</button>
        <button (click)="showDetails()" id="book-details-btn" class="btn btn-secondary">Show details</button>
      </div>
    </div>
  </div>
  `
})
export class HotelSummary implements OnInit {

  @Input() hotelSummary;
  @Input() arrayPos;
  
  hotelIndex$: Observable<number>;
  destinations$: Observable<any>;
  locationFormData$: Observable<IFormFields>;
  
  currentDestination;
  SET_SELECTED_HOTEL_INDEX;
  locationFormData: IFormFields;
  
  constructor(public store: Store<HrState>, private asyncPipe: AsyncPipe, private router: Router) {
    this.SET_SELECTED_HOTEL_INDEX = SET_SELECTED_HOTEL_INDEX;
    this.hotelIndex$ = this.store.pipe(select(selectors.selectCurrentHotelIndex));
    this.destinations$ = this.store.pipe(select(selectors.selectFetchedDestinations));
    this.locationFormData$ = this.store.pipe(select(selectors.selectLocationFormData));
  }

  ngOnInit() {
    const hotelIndex = this.asyncPipe.transform(this.hotelIndex$);
    const destinations = this.asyncPipe.transform(this.destinations$);
    this.locationFormData = this.asyncPipe.transform(this.locationFormData$);
    this.currentDestination = destinations[hotelIndex];
  }
  
  distanceFromSearched() {
    return HrTool.distance(this.locationFormData.suggestion.lat, this.locationFormData.suggestion.lon, this.hotelSummary.latitude, this.hotelSummary.longitude);
  }
  formattedGeo() {
    return HrTool.formatGeo(this.hotelSummary.latitude + ", " + this.hotelSummary.longitude);
  }
  expanded() {
    const hotelIndex = this.asyncPipe.transform(this.hotelIndex$);
    return this.arrayPos == hotelIndex;
  }
  showDetails() {
    this.router.navigateByUrl(routerNames.RESULTS_ID, this.arrayPos);
  }
}
