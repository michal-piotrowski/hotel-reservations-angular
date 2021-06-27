import { AsyncPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { FetchingState, HrState, selectors } from 'src/app/store/store';

@Component({
  selector: 'app-hotel-list',
  styleUrls: ['./hotel-list.component.scss'],
  template: `
    <div *ngIf="isFetching(); else hotel_list" style=" text-align: center; color: grey" class="container">
      <i class="fas fa-spinner fa-spin"></i>
    </div>
    <div ></div>
    <ng-template #hotel_list>
      <div id="hotel-list-wrapper">
        <app-hotel-summary *ngFor="let hotelSummary of ($fetchedDestinations | async); let ind = index" [hotelSummary]="hotelSummary" [arrayPos]="ind">
        </app-hotel-summary>
      </div>
    </ng-template>
  `
})
export class HotelListComponent implements OnInit {

  $fetchedDestinations: Observable<any>;
  $fetchingState: Observable<any>;
  fetchingState: FetchingState = FetchingState.DONE;

  constructor(private store: Store<HrState>, private asyncPipe: AsyncPipe) {
    this.$fetchingState = this.store.pipe(select(selectors.selectFetchingState));
    this.$fetchingState.subscribe(fState => {
      this.fetchingState = fState;
    })
    this.fetchingState = this.asyncPipe.transform(this.$fetchingState);
    this.$fetchedDestinations = this.store.pipe(select(selectors.selectFetchedDestinations));
  }

  isFetching() {
    return this.fetchingState == FetchingState.FETCHING
  }

  ngOnInit(): void {
  }

}
