import { AsyncPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { debounce } from 'lodash';
import { Observable } from 'rxjs';
import Suggestion from 'src/app/pojo/Suggestion';
import { CLEAR_COLLECTION, FETCH_SUGGESTIONS, FormFields, HrState, IFormFields, PUT_LOCATION_FORM_DATA, SEARCH_DESTINATIONS, selectors } from 'src/app/store/store';

@Component({
  selector: 'app-hotel-search',
  styleUrls: ['./hotel-search.component.scss'],
  template: `
    <div>
    <div id="search-input-wrapper">
      <img id="search-icon" src="assets/map/magnif_glas.png">
      <label class="search-input-label" for="search-input">{{'Searched:'|translate}}</label>
      <!-- below syntax: async is an angular pipe which subscribes to hrState$ (also unsubscribes when component dies ).-->
      <!-- When it resolves, returns our domain object. In this case, the hrState array. -->
      <app-suggestions
        #searchSuggestions
        [inputStyle]="'border: none'"
        (locationSelected)="handleLocationSelected($event)"
        [value]="initialLocation"
        (input)="queryMatching($event.target.value)"
        [containerStyle]="'height: 3em; width: 84%; float: left; minWidth: 10em'"
        [collection]="(hrState$ | async) && (hrState$ | async).suggestions"
        [placeholder]="'Your searched location'">
      </app-suggestions>
    </div>
    <div id="date-pickers-wrapper">
      <div id="date-from-wrapper">
        <img id="search-icon" src="assets/date_range_24px_outlined.png">
        <label class="search-input-label" for="search-input">{{'Check-out'|translate}}</label>
        <i id="chev-date-from-left" class="fa fa-chevron-left"></i>
        <input placeholder="dd-mm-yyyy" type="text" class="date-input">
        <i id="chev-date-from-right" class="fa fa-chevron-right"></i>
      </div>
      <div id="date-to-wrapper">
        <img id="search-icon" src="assets/date_range_24px_outlined.png">
        <label class="search-input-label" for="search-input">{{'Arrival'|translate}}</label>
        <i id="chev-date-to-left" class="fa fa-chevron-left"></i>
        <input placeholder="dd-mm-yyyy" type="text" class="date-input">
        <i id="chev-date-to-right" class="fa fa-chevron-right"></i>
      </div>
    </div>
    <div style="justify-content:center; display: flex; padding: 5px 50px 15px 50px;" class="cell" >
      <button (click)="handleSearch()" [disabled]="!(hrState$ | async)  || !(hrState$ | async).locationFormData || !(hrState$ | async).locationFormData.suggestion" class="btn btn-primary" style="width:100%">Search</button>
    </div>
  </div>
  `
})
export class HotelSearchComponent implements OnInit {

  locationFormData$: Observable<IFormFields>;
  hrState$: Observable<HrState>;

  locationFormData: IFormFields;
  initialLocation = null;

  constructor(private store: Store<HrState>, private asyncPipe: AsyncPipe) {
    this.hrState$ = this.store.pipe(select(selectors.state));
    this.locationFormData$ = this.store.pipe(select(selectors.selectLocationFormData));
    this.locationFormData = this.asyncPipe.transform(this.locationFormData$);
    if (this.locationFormData && this.locationFormData.suggestion && this.locationFormData.suggestion.display_name) {
      this.initialLocation = this.locationFormData.suggestion.display_name
    }
  }

  ngOnInit(): void {
  }

  handleLocationSelected(suggestion: Suggestion) {
    this.store.dispatch(PUT_LOCATION_FORM_DATA({formFieldsValue: new FormFields(suggestion)}));
    this.clearCollection();
  }
  clearCollection() {
    this.store.dispatch(CLEAR_COLLECTION());
  }  
  debouncedQueryMatch = debounce(function (value, vm) {
    vm.store.dispatch(FETCH_SUGGESTIONS({ userText: value }));
  }, 1000)

  queryMatching(value) {
    this.debouncedQueryMatch(value, this);
  }
  handleSearch() {
    //show spinner
    document.querySelector('#leaflet-map').scrollIntoView();
    this.store.dispatch(SEARCH_DESTINATIONS());
  }
}
