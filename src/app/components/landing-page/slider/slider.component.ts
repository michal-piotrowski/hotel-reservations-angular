import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-slider',
  template: `
  <!-- refactor out all css to .scss-->
    <div id="sliderForm">
    <div id="sliderImgWrapper">
      <div id="sliderImg"></div>
    </div>
    <div class="col-md-4 midpageComponent" id="sloganLeft">Begin your journey</div>
    <div class="col-md-4 midpageComponent" id="formMiddle">
      <div class="container" id="form-container">
        <div id="textBanner" class="row ">
          <p>Looking for a hotel?</p>
        </div>
        <div class="row" id="landing-where">
          <img id="landing-where-image" src="assets/locationIcoFilled_purp.png"/>
          <input id="landing-where-input" type="text" placeholder="Your searched location" />
        </div>
        <div class="row">
          <div id="landing-from-wrapper" class="col-sm-6">
            <div id="landing-from" >
              <img id="landing-date-from" src="assets/date_range_24px_outlined.png"/>
              <input id="landing-date-from-input" class="form-control" type="text" placeholder="Date from" />
            </div>
          </div>
          <div id="landing-to-wrapper" class="col-sm-6">
            <div id="landing-to" >
              <img id="landing-date-to" src="assets/date_range_24px_outlined.png" />
              <input id="landing-date-to-input" class="form-control" type="text" placeholder="Date to"/>
            </div>
          </div>
        </div>
        <div class="row justify-content-center" id="search-wrapper">
          <button id="search-button" class="btn btn-primary">Search</button>
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

  isIdle: Boolean = true;

  constructor() { }

  ngOnInit(): void {
  }
//
}
