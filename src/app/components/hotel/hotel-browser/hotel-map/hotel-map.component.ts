import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import * as L from 'leaflet';
import { HrTool }  from '../../../../helpers/HrTool.js';
import {isEmpty} from 'lodash';
import { Observable } from 'rxjs';
import { HrState, IFormFields, selectors } from 'src/app/store/store.js';
import { select, Store } from '@ngrx/store';
import { AsyncPipe } from '@angular/common';
 
@Component({
  selector: 'app-hotel-map',
  styleUrls: ['./hotel-map.component.scss'],
  template: `  
    <div class="component-wrapper">
      <div class="component-container container">
        <app-hotel-search></app-hotel-search>
        <div id="leaflet-wrapper">
          <div id="leaflet-map"></div>
        </div>
        <app-hotel-list></app-hotel-list>
      </div>
    </div>
  `,
})
export class HotelMapComponent implements OnInit {

  map: L.Map = null;
  layerGroup: L.LayerGroup = null;

J
  locationFormData$: Observable<IFormFields>;
  destinations$: Observable<any>;
  
  locationFormData: IFormFields;
  destinations: any;
  // hrState$: Observable<HrState>;

  // initialLocation: string;

  constructor(private store: Store<HrState>, private asyncPipe: AsyncPipe) {
    // this.hrState$ = this.store.pipe(select(selectors.state));
    this.locationFormData$ = this.store.pipe(select(selectors.selectLocationFormData));
    this.locationFormData = this.asyncPipe.transform(this.locationFormData$);
    this.destinations$ = this.store.pipe(select(selectors.selectFetchedDestinations));
    this.locationFormData$.subscribe(locationFormData => {
      if (locationFormData.suggestion) {
        this.map.setView([locationFormData.suggestion.lat, locationFormData.suggestion.lon], 13);
      }
    })
    this.destinations$.subscribe(destinations => {
      this.layerGroup && this.layerGroup.clearLayers();
      if (destinations && document.querySelector('#leaflet-map')) {
        for (let place of destinations) {
          this.addMarker(place.latitude, place.longitude)
        }
        document.querySelector('#leaflet-map').scrollIntoView();
        // code to switch off the spinner 
      }
    })
    this.destinations = this.asyncPipe.transform(this.destinations$);
    // if (this.locationFormData && this.locationFormData.suggestion && this.locationFormData.suggestion.display_name) {
    //   this.initialLocation = this.locationFormData.suggestion.display_name
    // }
  }

  ngOnInit(): void {
    this.map = L.map('leaflet-map');
    this.layerGroup = L.layerGroup().addTo(this.map);
    if (isEmpty(this.locationFormData) && isEmpty(this.locationFormData.suggestion)) {
      this.map.setView([51.505, -0.09], 13);
    } else {
      document.querySelector('#leaflet-map').scrollIntoView();
      this.map.setView([this.locationFormData.suggestion.lat, this.locationFormData.suggestion.lon], 13);
    }
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);
    this.addMarkers;
  }

  addMarkers() {
    for (let location of this.destinations) {
      this.addMarker(location.latitude, location.longitude);
    }
  }

  addMarker(lat, lon) {
    if (lat && lon) {
      L.marker([lat, lon], {icon: HrTool.getDefaultMarker()}).addTo(this.layerGroup);
    }
  }

}

