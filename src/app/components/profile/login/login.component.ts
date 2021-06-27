import { Component, ComponentFactory, ComponentFactoryResolver, ComponentRef, Directive, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { LoginFormComponent } from '../loginForm/login-form.component';
import { RegistrationFormComponent } from '../registrationForm/registration-form.component';


@Directive({
  selector: '[host]',
})
export class DynamicComponent {
  constructor(public viewContainerRef: ViewContainerRef) {
    console.log('directive');
  }
}
@Component({
  selector: 'app-login',
  styleUrls: ['./login.component.scss'],
  template: `
  <div class="component-wrapper" id="login-wrapper">
    <div class="row" id="login-inter-wrapper">
      <div id="login-spacer-left" class="col-md-4">
        
      </div>
      <div class="col-md-4" >
        <div id="login-component-wrapper">
          <div class="container login-component-header">
            <div (click)="setLoginComponent()" class="container login-component-header sign-in">
              <span>Log in</span>
            </div>
            <div (click)="setRegistrationComponent()" class="container login-component-header sign-up">
              <span>Sign up</span>
            </div>
          </div>
          <div class="container login-component">
            <ng-template host>
  
            </ng-template>
          </div>
        </div>
      </div>  
      <div id="login-info" class="col-md-4">
        <div>
          <div id="info-icon-wrapper">
            <img id="info-icon" src="assets/login/information.png" alt="INFO">
          </div>
          <span>Creating an account will let you save and retrieve information about the bookings you’ve made with Hotel Reservations. </span>
        </div>
      </div>  
    </div>
  </div>`
})
export class LoginComponent implements OnInit {

  @ViewChild(DynamicComponent, { static: true }) dynamicComponent: DynamicComponent;
  currentComponent: any;
  componentRef: any;
  loginComponentFactory: ComponentFactory<LoginFormComponent>;
  loginComponentRef: ComponentRef<LoginFormComponent>
  registrationComponentRef: ComponentRef<RegistrationFormComponent>

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
  }
  
  ngOnInit(): void {
    this.setLoginComponent();
  }

  setLoginComponent() {
    if (this.loginComponentRef == null) {
      this.loginComponentFactory = this.componentFactoryResolver.resolveComponentFactory(LoginFormComponent);
      const viewContainerRef = this.dynamicComponent.viewContainerRef;
      viewContainerRef.clear();
      this.loginComponentRef = viewContainerRef.createComponent<LoginFormComponent>(this.loginComponentFactory);
    } else {
      this.dynamicComponent.viewContainerRef.insert(this.loginComponentRef.hostView);
    }
    
  }
  setRegistrationComponent() {
    if (this.registrationComponentRef == null) {
      this.loginComponentFactory = this.componentFactoryResolver.resolveComponentFactory(RegistrationFormComponent);
      const viewContainerRef = this.dynamicComponent.viewContainerRef;
      viewContainerRef.clear();
      this.registrationComponentRef = viewContainerRef.createComponent<LoginFormComponent>(this.loginComponentFactory);
    } else {
      this.dynamicComponent.viewContainerRef.insert(this.registrationComponentRef.hostView);
    }
    
  }

}

