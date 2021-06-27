import { Component, OnChanges, OnInit } from '@angular/core';
// import { names as storeNames, formFields } from '../../../store/store';
import { debounce } from 'lodash';
import { FETCH_SUGGESTIONS, HrState, selectors, ISuggestions, CLEAR_COLLECTION, PUT_LOCATION_FORM_DATA, FormFields, IFormFields, SET_FETCHED_DESTINATIONS, SEARCH_DESTINATIONS } from '../../../store/store';
import { select, Store } from '@ngrx/store';
import { Router } from '@angular/router';
import RouterNames from '../../routerNames';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import Suggestion from 'src/app/pojo/Suggestion';
@Component({
  selector: 'app-slider',
  template: `
  <div id="sliderForm">
    <div id="sliderImgWrapper">
      <div id="sliderImg"></div>    
    </div>
    <div class="col-md-4 midpageComponent" id="sloganLeft">Begin your journey</div>
    <div class="col-md-4 midpageComponent" id="formMiddle">
      <div class="container" id="form-container">
        <div id="textBanner" class="row ">
          <p id="text-mid">Looking for a hotel?</p>
        </div>
        <div class="row" id="landing-where">
          <img id="landing-where-image" src="/assets/locationIcoFilled_purp.png"/>
          <!-- below syntax: async is an angular pipe which subscribes to hrState$ (also unsubscribes when component dies ).-->
          <!-- When it resolves, returns our domain object. In this case, the hrState array. -->
          <app-suggestions
            [collection]="(hrState$ | async) && (hrState$ | async).suggestions"
            (locationSelected)="handleLocationSelected($event)"
            style="height:100%; width: calc(100% - 2.8em)"
            #searchSuggestions
            [inputStyle]="'position: relative; z-index: 2; height:100%; width:100%; font-size:10pt'"
            (input)="queryMatching($event.target.value)"
            [containerStyle]="'width: calc(100% - 2.8em)'"
            [placeholder]="'Your searched location'">
          </app-suggestions>
        </div>
        <div class="row">
          <div id="landing-from-wrapper" class="col-sm-6">
            <div id="landing-from" >
              <input (input)="handleDateFromSelected($event)" id="landing-date-from-input" ref="date-from" class="form-control" type="date" placeholder="Date from" />
            </div>
          </div>
          <div id="landing-to-wrapper" class="col-sm-6">
            <div id="landing-to" >
              <input (input)="handleDateToSelected($event)" id="landing-date-to-input" ref="date-to" class="form-control" type="date" placeholder="Date to"/>
            </div>
          </div>
        </div>
        <div class="row justify-content-center" id="search-wrapper">
          <button (click)="searchHotels()" [disabled]="!(hrState$ | async)  || !(hrState$ | async).locationFormData || !(hrState$ | async).locationFormData.suggestion" id="search-button" class="btn btn-primary">Search</button>
        </div>
      </div>
    </div>   
    <div class="col-md-4 midpageComponent" id="sloganRight">Search locations around the globe using combined data from major hotel searches</div>
  </div> 
  `,
  styleUrls: [
    'slider.component.scss'
  ]
})
export class SliderComponent implements OnInit {
  
  constructor(private store: Store<HrState>, private router: Router, public asyncPipe: AsyncPipe) {
  }

  ngOnInit(): void {
    console.log(this.store)
    this.hrState$ = this.store.pipe(select(selectors.state));
  }

  hrState$: Observable<HrState>;
  searchValue = null;
  collection = null;
  isIdle: Boolean = true; 

  handleLocationSelected(suggestion: Suggestion) {
    this.store.dispatch(PUT_LOCATION_FORM_DATA({formFieldsValue: new FormFields(suggestion)}));
    this.clearCollection();
  }
  handleDateFromSelected(event) {
    this.store.dispatch(PUT_LOCATION_FORM_DATA({formFieldsValue: new FormFields(null, event.target.value)}));
  }
  handleDateToSelected(event) {
    this.store.dispatch(PUT_LOCATION_FORM_DATA({formFieldsValue: new FormFields(null, null, event.target.value)}));
  }
  clearCollection() {
    this.store.dispatch(CLEAR_COLLECTION());
  }  
  searchHotels() {
    this.router.navigateByUrl(RouterNames.RESULTS);
    this.store.dispatch(SEARCH_DESTINATIONS());
  }
  debouncedQueryMatch = debounce(function (value, vm) {
    vm.store.dispatch(FETCH_SUGGESTIONS({ userText: value }));
  }, 1000)
  queryMatching(value) {
    this.searchValue = value;
    this.debouncedQueryMatch(value, this);
  }

}
