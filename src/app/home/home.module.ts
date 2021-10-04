import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DlDateTimePickerModule, DlDateTimeDateModule} from 'angular-bootstrap-datetimepicker';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HomeComponent} from './home.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    DlDateTimeDateModule,
    DlDateTimePickerModule
  ],
  declarations: [
    HomeComponent,
  ],
})
export class HomeModule {
}
