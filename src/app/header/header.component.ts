import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  light=true;
  dark=false;

  lightTheme(){
    this.light=true;
    this.dark=false;
  }
  darkTheme(){
    this.light=false;
    this.dark=true;
  }
}
