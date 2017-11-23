import { Component } from '@angular/core';
import {DomSanitizer,SafeHtml} from '@angular/platform-browser';

@Component({
  selector: 'my-app',
  template: `
    <h1>Hello {{getName()}}</h1>
    <p class="testClass" [class]="greetingClass">{{greeting}}</p>
    <p class="testClass" [class.greeting]=flagTrue>{{member?.name}}</p>
    <img [src]="image" />
    <img bind-src="image" />
    <div [innerHTML]="safeMsg"></div>
    <table>
      <tr [style.background-color]="bcolor" [style.font-size.%]="fontLsize">
        <td [attr.rowspan]="len" [innerHtml]="test"></td>
      </tr>
      <tr>
        <td [innerHtml]="test"></td>
      </tr>
      <tr>
        <td [innerHtml]="test"></td>
      </tr>
    </table>
    <input type="button" (click)="show($event)" value="現在時刻" />
    <p>{{currentTime}}</p>
    <p><input type="text" (input)="showInput($event)"></p>
    <ul [innerHtml]="inputEvent"></ul>
    `,
    styles: [`
      .greeting{
        color:#ddd;
      }
      .testClass{
        font-size:200%;
      }
    `]
})
export class AppComponent  {
  test:String = "Stringtest";
  name:String = 'Angular';
  greeting:String = 'こんにちは';
  member = {
    name: 'ham',
    age: '27'
  }
  msg:String = '<a onClick="alert(\'test\');test()">test</a>'
  image:String ='http://www.wings.msn.to/image/wings.jpg';
  len:number=3;
  greetingClass:String="greeting";
  flagTrue:boolean=true;
  bcolor="#0ff"
  fontLsize:number=300;
  currentTime:String="-------";
  inputEvent:String="";
  constructor(private sanitizer:DomSanitizer){
    this.safeMsg = sanitizer.bypassSecurityTrustHtml(this.msg);
  }
  show(event:any){
    this.currentTime = new Date().toLocaleString();
    console.log(event);
  }
  showInput(event:any){
    this.inputEvent += `<li>${event.target.value}</li>` 
  }
  getName():String{
    return this.name;
  }

  getGreeting():String{
    return greeting;
  }
}
