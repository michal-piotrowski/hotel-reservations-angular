import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: 'translate' })
export class TranslatePipe implements PipeTransform {
  language: string;

  constructor() {
    this.language = "EN";
  }

  getMessage(language, key) {
    return key;
  }

  transform(messageKey) {
    return this.getMessage(this.language, messageKey);
  }
}