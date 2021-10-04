import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DateRangeComponent} from './date-range.component';
import {DlDateTimePickerModule, DlDateTimeDateModule, DlDateTimeInputModule} from 'angular-bootstrap-datetimepicker';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    DlDateTimeDateModule,
    DlDateTimeInputModule,
    DlDateTimePickerModule,
    FormsModule,
  ],
  declarations: [
    DateRangeComponent,
  ],
})
export class DateRangeModule {
}
