import { ActionReducerMap, createAction, createReducer, createSelector, on, props, Store } from "@ngrx/store";
import Suggestion from "../pojo/Suggestion";
import { Actions, ofType, createEffect, Effect } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';
import { Injectable } from "@angular/core";
import { HttpService } from "../http/http.service";
// import HrAxios, {URL} from "../http/HrAxios.js";


export interface ISuggestions {
  suggestions: [Suggestion]
}

export class FetchingState {
  static readonly FETCHING = 'FETCHING';
  static readonly DONE = 'DONE';
};

export interface IFormFields {
  suggestion?: Suggestion
  dateFrom?: string
  dateTo?: string
};
export interface HrState {
  suggestions?: any;
  destinations?: [];
  locationFormData?: IFormFields;
  selectedHotel?: number;
  search_text?: string;
  fetchingState: FetchingState;
}

export class FormFields implements IFormFields {
  constructor(public suggestion?: Suggestion, public dateFrom?: string, public dateTo?: string) {
    this.suggestion = suggestion;
    this.dateFrom = dateFrom;
    this.dateTo = dateTo;
  }
}


const initialState = {
  suggestions: [],
  destinations: [],
  locationFormData: {},
  selectedHotel: null,
  search_text: null,
  fetchingState: null
};



export const FETCH_SUGGESTIONS = createAction('fetchSuggestions', props<{userText}>())
export const CLEAR_COLLECTION = createAction('clearCollection')
export const PUT_LOCATION_FORM_DATA = createAction('putLocationFormData', props<{formFieldsValue}>())
export const PUT_SUGGESTIONS = createAction('putSuggestions', props<{suggestions}>())
export const SEARCH_DESTINATIONS = createAction('searchDestinations');
export const SET_FETCHED_DESTINATIONS = createAction('setFetchedDestinations', props<{destinations}>());
export const SET_SELECTED_HOTEL_INDEX = createAction('setSelectedHotelIndex', props<{index}>());
export const SET_FETCHING_STATE = createAction('setFetchingState', props<{fState}>());

const getState = (state: HrState) => state;

export const selectors = {
  state: createSelector( getState, (state: HrState) => state.suggestions ),
  selectFetchedDestinations: createSelector( getState, (state: HrState) => state.suggestions.destinations ),
  selectCurrentHotelIndex: createSelector( getState, (state: HrState) => state.suggestions.selectedHotel ),
  selectLocationFormData: createSelector( getState, (state: HrState) => state.suggestions.locationFormData ),
  selectFetchingState: createSelector( getState, (state: HrState) => state.suggestions.fetchingState )
}
export const suggestionsReducer = createReducer(initialState,

  on(FETCH_SUGGESTIONS, (state, { userText }) => { return state }),
  on(CLEAR_COLLECTION, (state) => { return { ...state, suggestions: [] } }),
  on(PUT_LOCATION_FORM_DATA, (state, { formFieldsValue }) => {
    if (formFieldsValue && formFieldsValue.suggestion) {
      let newFormFieldsValue = { ...state.locationFormData, suggestion: formFieldsValue.suggestion }
      return { ...state, locationFormData: newFormFieldsValue };
    } else if (formFieldsValue && formFieldsValue.dateFrom) {
      let newFormFieldsValue = { ...state.locationFormData, dateFrom: formFieldsValue.dateFrom }
      return { ...state, locationFormData: newFormFieldsValue };
    } else if (formFieldsValue && formFieldsValue.dateTo) {
      let newFormFieldsValue = { ...state.locationFormData, dateTo: formFieldsValue.dateTo }
      return { ...state, locationFormData: newFormFieldsValue };
    }
    return state;
  }),
  on(PUT_SUGGESTIONS, (state, { suggestions }) => { return { ...state, suggestions: suggestions }; }),
  on(SEARCH_DESTINATIONS, (state) => { return state; }),
  on(SET_FETCHED_DESTINATIONS, (state, { destinations }) => { return { ...state, destinations: destinations } }),
  on(SET_SELECTED_HOTEL_INDEX, (state, {index}) => { return { ...state, selectedHotel: index }; }),
  on(SET_FETCHING_STATE, (state, {fState}) => { return { ...state, fetchingState: fState }; }),
)
//@ts-ignore
export const reducers: ActionReducerMap<HrState> = {
  suggestions: suggestionsReducer
};

function parseSuggestion(nominatimLocation) {
  if (nominatimLocation && nominatimLocation.display_name.includes(',') && nominatimLocation.display_name.split(',').length > 1) {
    const suggestionParts = nominatimLocation.display_name.split(',');
    return suggestionParts[0] + ' ' + suggestionParts[suggestionParts.length-1];
  } else {
    return nominatimLocation.display_name;
  }
}

@Injectable()
export class HttpEffects {
  // actions$ is an observable which gives you access to all dispatched actions
  // Here, in the effect you don't change any state, but execute other code.
  // Once this (e.g. http query) code finishes, you can dispatch reducer actions
  constructor(private actions$: Actions, private httpService: HttpService, private store: Store<HrState>) {

  }

  @Effect()
  nominatimSuggestions$ = () => this.actions$.pipe(
      ofType(FETCH_SUGGESTIONS.type),  // filter, which kind of action to "intercept" here. Result is passed to mergeMap
      // concatMap - when order of ops. ist desired to be upheld
      // switchMap - allows just one inner subscription. mergeMap - allows multiple subscriptions to be active at time of calling
      mergeMap((dispatchedActionPayload: any) => {
          const query = this.httpService.URL.nomLocationsSuggestions + 'search?q=' + dispatchedActionPayload.userText + '&format=json';
          return this.httpService.get(query).pipe(
            map(nominatimResponse => {
              if (nominatimResponse.length == 0) {
                return this.store.dispatch(PUT_SUGGESTIONS({suggestions: [{ id: -1, display_name: 'No results found' }]}));
              } else {
                return this.store.dispatch(PUT_SUGGESTIONS({
                  suggestions: nominatimResponse.map(el => {
                    return { id: el.place_id, display_name: el.display_name, lat: el.lat, lon: el.lon }
                  })
                }));
              }
            })
          )
      })
  )
  
  @Effect()
  fetchedDestinations$ = () => this.actions$.pipe(
    ofType(SEARCH_DESTINATIONS.type),
    mergeMap(() => {
      /** 
       * this.store.source.value.suggestions.locationFormData.suggestion - 
       * reference to a field in store, we don't want to bother with piping an observable because we know, 
       *  that the locationFormData.suggestion had already been pushed to state
       * */
      this.store.dispatch(SET_FETCHING_STATE({fState: FetchingState.FETCHING}))
      // @ts-ignore: Property doesn't exist
      const parsedSuggestion = parseSuggestion(this.store.source.value.suggestions.locationFormData.suggestion); 
      return this.httpService.get(this.httpService.URL.rapSearchDestinations + '?query=' + parsedSuggestion)
        .pipe(
          map(response => {
          this.store.dispatch(SET_FETCHING_STATE({fState: FetchingState.DONE}))
          if (response.suggestions[1].entities.length == 0) {
            this.store.dispatch(SET_FETCHED_DESTINATIONS({ destinations: [{ id: -1, caption: 'No results found' }] }));
          } else {
            this.store.dispatch(SET_FETCHED_DESTINATIONS({ destinations: response.suggestions[1].entities }));
          }
        }));
    })
  )
  
}