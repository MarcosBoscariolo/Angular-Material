import { FormFieldInputComponent } from './components/form-field-input/form-field-input.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProgressSpinnerComponent } from './components/progress-spinner/progress-spinner.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { DatepickerComponent } from './components/datepicker/datepicker.component';

@NgModule({
  declarations: [
    AppComponent,
    FormFieldInputComponent,
    ProgressSpinnerComponent,
    TabsComponent,
    DatepickerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
