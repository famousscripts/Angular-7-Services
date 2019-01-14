import { Component } from '@angular/core';
import  { CalserviceService } from './calservice.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  valueArr: any = [];
  someValues: string = '';

  // This is the service which can be accessable in other components

 constructor(private calservice: CalserviceService) { }

 ngOnInit(): void {
      this.valueArr = this.calservice.nunVal);
      this.someValues = this.calservice.myValues();
 }
     
}
