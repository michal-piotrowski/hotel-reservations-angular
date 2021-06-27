import { Component } from "@angular/core";

@Component({
  selector: 'app-login-form',
  template: `
    <div class="container login-component">
      <div id="login-form-wrapper">
        <label for="email-address" id="email-address-label">E-mail address</label>
      </div>
      <div id="address-input-wrapper">
        <input id="email-address-input">
      </div>
      <label for="password" id="password-label">Password</label>
      <div id="password-input-wrapper">
        <input id="password-input">
      </div>
      <div id="signin-button">
        <button class="btn btn-primary">Sign in</button>
      </div>
    </div>
  `,
  styleUrls: ['login-form.component.scss']
})
export class LoginFormComponent {
  constructor() {
    console.log('login form created');
  }
}