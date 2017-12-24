import { NgModule ,LOCALE_ID,Provider }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule,JsonpModule }    from '@angular/http'

import { AppComponent }  from './app.component';
import { LoginService }  from './service/login/LoginService'

@NgModule({
  imports:      [ BrowserModule,FormsModule,HttpModule,JsonpModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
  providers:    [{provide:LOCALE_ID,useValue:'jp-JP'},LoginService]
})
export class AppModule { }
