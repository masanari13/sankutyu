import { Component } from '@angular/core';
import { DomSanitizer,SafeHtml } from '@angular/platform-browser';
import { Http,URLSearchParams } from '@angular/http'
import { LoginService } from './service/login/LoginService'

import { User } from './model/user/User'

@Component({
  selector: 'my-app',
  templateUrl: `./components/login/loginForm.html`
})
export class AppComponent  {
  user:User = new User();
  result:String = '';
  constructor(private loginService: LoginService){}

  login(){
     this.result = this.loginService.loginRequest(this.user);
  }
}
