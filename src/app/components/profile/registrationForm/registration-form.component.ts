import { Component } from "@angular/core";

@Component({
  selector: 'app-registration-form',
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
      <label for="retype-password" id="retype-password-label">Retype password</label>
      <div id="retype-password-input-wrapper">
        <input id="retype-password-input">
      </div>
      <div id="signin-button">
        <button class="btn btn-primary">Submit</button>
      </div>
    </div>
  `,
  styleUrls: ['registration-form.component.scss', '../loginForm/login-form.component.scss']
})
export class RegistrationFormComponent {
  
}