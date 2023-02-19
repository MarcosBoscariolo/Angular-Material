import { Platform } from '@angular/cdk/platform';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss']
})
export class DatepickerComponent implements OnInit {

  startDate = new Date(2023, 1, 19);
  minDate = new Date(2023, 1, 19);
  maxDate = new Date(2023, 2, 19);

  constructor(private platform: Platform) { }

  ngOnInit(): void {
  }

  get isTouchDevice() {
    return this.platform.ANDROID || this.platform.IOS;
  }

}
