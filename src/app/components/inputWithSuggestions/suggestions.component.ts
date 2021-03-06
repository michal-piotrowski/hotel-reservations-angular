import { Component, Input, ViewChild, EventEmitter, OnInit, Output, OnChanges } from '@angular/core';
import { isEmpty } from 'lodash';
import Suggestion from 'src/app/pojo/Suggestion';

@Component({
  selector: 'app-suggestions',
  template: `
    <div :style="containerStyle">
    <input #suggestionsInput id="landing-where-input" class="form-control" autocomplete="off"
      (blur)="delayHideCollection"
      (input)="handleInput"
      [value]="value"
      [placeholder]="placeholder"
      [style]="inputStyle">
    <div  *ngIf="showList()" id="suggestion-list-wrapper">
      <ul #results id="result-list">
        <li *ngFor="let suggestion of collection"
          (click)="suggestionClicked(suggestion)"
          [class]="['suggestion-text', isSelectable(suggestion) ? 'highlightable' : '']" 
          [title]="getDisplayName(suggestion)">
          {{getDisplayName(suggestion)}}
      </li>
      </ul>
    </div>
  </div>
  `,
  styleUrls: [
    './suggestions.component.scss'
  ]
})
export class SuggestionsComponent implements OnInit, OnChanges{
  shouldShowCollection: Boolean = true;
  highlightPosition: 0;

  @Input() value = null;
  @Input() containerStyle = null;
  @Input() placeholder = null;
  @Input() selected = null;
  @Input() inputStyle = null;
  @Input() collection: [] = null;
  @Output() locationSelected = new EventEmitter<Suggestion>();
  @Output() input: EventEmitter<any> = new EventEmitter();

  ngOnInit() {
    console.log('suggestions created');
  }
  
  ngOnChanges(arg1) {
    console.log(arg1);
  }
  @ViewChild('suggestionsInput') suggestionsInputRef;
  @ViewChild('results') resultsRef;

  showList() {
    const shouldShow = !isEmpty(this.collection) && this.suggestionsInputRef.nativeElement.value && this.shouldShowCollection;
    if (shouldShow && this.resultsRef) {
      this.resultsRef.nativeElement.focus()
    }
    return !isEmpty(this.collection) && this.suggestionsInputRef.nativeElement.value && this.shouldShowCollection;
  }
  delayHideCollection() {
    const vm = this;
    setTimeout(() => {
      vm.shouldShowCollection = false;
    }, 200);
  }
  suggestionClicked(suggestion: Suggestion) {
    this.suggestionsInputRef.nativeElement.value = suggestion.display_name;
    this.locationSelected.emit(suggestion);
  }
  handleInput(value: HTMLInputElement) {
    this.shouldShowCollection = true;
    this.input.emit(value);
  } 
  getDisplayName(suggestion) {
    return suggestion && suggestion.display_name;
  }
  isSelectable(suggestion) {
    return suggestion && suggestion.display_name != 'No results found';
  }
}