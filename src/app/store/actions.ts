import { Action } from "@ngrx/store";


export const FETCH_SUGGESTIONS = 'FETCH_SUGGESTIONS';
export class FetchSuggestions implements Action {
  readonly type: string = FETCH_SUGGESTIONS;
  value: null;
  payload: string = '';
}
