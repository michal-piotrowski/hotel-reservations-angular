import { Action, ActionReducerMap, createAction, createReducer, createSelector, on, props } from "@ngrx/store";
import Suggestion from "../pojo/Suggestion";
import { Actions } from '@ngrx/effects';
// import HrAxios, {URL} from "../http/HrAxios.js";


export interface ISuggestions {
  suggestions: [Suggestion]
}

export interface HrState {
  suggestions?: any;
  destinations?: [];
  locationFormData?: IFormFields;
  selectedHotel?: {};
  search_text?: string;
}

export interface IFormFields {
  suggestion?: string
  dateFrom?: string
  dateTo?: string
};

export class FormFields implements IFormFields{
  constructor(public suggestion?: string, public dateFrom?: string, public dateTo?: string) {
    this.suggestion = suggestion;
    this.dateFrom = dateFrom;
    this.dateTo = dateTo;
  }
}

const initialState = {
  suggestions: [],
  destinations: [],
  locationFormData: {},
  selectedHotel: {},
  search_text: null,
};

export const FETCH_SUGGESTIONS = createAction('fetchSuggestions', props<{userText}>())
export const CLEAR_COLLECTION = createAction('clearCollection')
export const PUT_LOCATION_FORM_DATA = createAction('putLocationFormData', props<{formFieldsValue}>())

// export const suggestionsSelector = (state: HrState) => state.suggestions
const getState = (state: HrState) => state;

export const selectors = {
  select: createSelector(
    getState,
    (state: HrState) => state.suggestions
    )
}

export const suggestionsReducer = createReducer(initialState,
  on(FETCH_SUGGESTIONS, (state, { userText }) => { return { ...state, suggestions: [{id: -1, display_name: 'Zimbabwe'}, {id: 1, display_name: userText}] } }),
  on(CLEAR_COLLECTION, (state) => { return { ...state, suggestions: [] } }),
  on(PUT_LOCATION_FORM_DATA, (state, { formFieldsValue }) => {
    if (formFieldsValue && formFieldsValue.suggestion) {
      let newFormFieldsValue = {...state.locationFormData, suggestion: formFieldsValue.suggestion}      
      return { ...state, locationFormData: newFormFieldsValue };
    } else if (formFieldsValue && formFieldsValue.dateFrom) {
      let newFormFieldsValue = {...state.locationFormData, dateFrom: formFieldsValue.dateFrom}      
      return { ...state, locationFormData: newFormFieldsValue };
    } else if (formFieldsValue && formFieldsValue.dateTo) {
      let newFormFieldsValue = {...state.locationFormData, dateTo: formFieldsValue.dateTo}      
      return { ...state, locationFormData: newFormFieldsValue };
    }
    return state;
  })
)

export const reducers: ActionReducerMap<HrState> = {
  suggestions: suggestionsReducer
};

export class HttpEffects {
  nominatimSuggestions
  // Actions is an observable which gives you access to all dispatched actions
  // Here, in the effect you don't change any state, but execute other code.
  // Once this (e.g. http query) code finishes, you can dispatch reducer actions
  constructor(private actions$: Actions) {

  }


}
// export const reducer = (state: HrState, action: Action) => {
//   return _reducer(state, action);
// }


// export const names = {
//   mutations: {
//     PUT_SUGGESTIONS: 'putSuggestions',
//     SEARCH_DESTINATIONS: 'searchDestinations',
//     FETCH_SUGGESTIONS: 'fetchSuggestions',
//     SET_SELECTED_HOTEL_INDEX: 'setSelectedHotelIndex',
//   },
//   actions: {
//     PUT_LOCATION_FORM_DATA: createAction('setSelectedSuggestion'), 
//     SET_SELECTED_SUGGESTION: createAction('setSelectedSuggestion'),
//     PUT_SUGGESTIONS: createAction('putSuggestions'),
//     FETCH_SUGGESTIONS: createAction('fetchSuggestions'),
//     SEARCH_DESTINATIONS: createAction('searchDestinations'),
//     MERGE_LOCATION_FORM_VALUE: createAction('mergeLocationFormValue')
//   }
// }



// export const slice = createSlice({
//   name: 'suggestions',
//   initialState,
//   reducers: {
//     // Cannot contain asynchronous code/ side effect causing code (sync or async). These require useEffect hook or actionCreators.
//     // Any modification to state is detected by reduxjs/toolkit, and it takes care of not mutating state object.
//     // It simulates modificaiton internally (duplicates state object with patched values) (Immer)
//     //
//     // Also use action object to pass arguments to the call
//     putSuggestions(state, action) {
//       state.suggestions = action.payload
//     },
//     putLocationFormData(state, action) {
//       state.locationFormData[action.payload.fieldName] = action.payload.value
//     },
//     setSearchText(state, action) {
//       state.search_text = action.payload
//     },
//     setFetchedDestinations(state, action) {
//       state.destinations = action.payload;
//     },
//     setSelectedHotel(state, action) {
//       state.selectedHotel = action.payload;
//     }
//   }
// });

// export const fetchSuggestionsCreator = (searchString) => {
//   return dispatch => {
//     HrAxios.httpGet(URL.nomLocationsSuggestions + 'search?q=' + searchString + '&format=json')
//     .then(response => {
//       if (response.data.length != 0) {
//         dispatch(slice.actions[names.actions.PUT_SUGGESTIONS](response.data));
//       } else {
//         dispatch(slice.actions[names.actions.PUT_SUGGESTIONS]([]))
//       }
//     })
//   }
// }

// function parseSuggestion(nominatimLocation) {
//   if (nominatimLocation.includes(',') && nominatimLocation.split(',').length > 1) {
//     const suggestionParts = nominatimLocation.split(',');
//     return suggestionParts[0] + ' ' + suggestionParts[suggestionParts.length-1];
//   } else {
//     return nominatimLocation;
//   }
// }

// export const searchDestinationsCreator = (currentSuggestion) => {
//   return dispatch => {
//     const parsedSuggestion = parseSuggestion(currentSuggestion.display_name);
//     return HrAxios.httpGet(URL.rapSearchDestinations + '?query=' + parsedSuggestion)
//     .then(response => {
//       if (response.data.suggestions[1].entities.length == 0) {
//         dispatch(slice.actions.setFetchedDestinations([{ id: -1, caption: 'No results found' }]));
//       } else {
//         dispatch(slice.actions.setFetchedDestinations(response.data.suggestions[1].entities));
//       }
//     });
//   }
// }
// export const actions = slice.actions;