import { Injectable } from '@angular/core';
import { Http,URLSearchParams,Jsonp } from '@angular/http';

import { User } from '../../model/user/User';

@Injectable()
export class LoginService {

  params:URLSearchParams = new URLSearchParams();
  constructor(private http:Http,private jsonp:Jsonp){};
  responsText:string = "";

  loginRequest(user:User):string{
    this.params.set('userName', user.getUserId());
    this.params.set('password', user.getPassword());

    this.http.get('http://localhost/sankutyu/main-api/',{
      search: this.params
    }).subscribe(
      response => {
        this.responsText = response.text();
      },
      error => {
        this.responsText = `エラー：${error.statusText}`;
      }
    );
    return this.responsText;
  }
}
