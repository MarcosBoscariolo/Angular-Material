import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { ProgressSpinnerComponent } from './components/progress-spinner/progress-spinner.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { DatepickerComponent } from './components/datepicker/datepicker.component';
import { SnackbarComponent } from './components/snackbar/snackbar.component';
import { FormFieldInputComponent } from './components/form-field-input/form-field-input.component';
import { SnackbarMsnComponent } from './components/snackbar/snackbar-msn/snackbar-msn.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { DialogModalComponent } from './components/dialog/dialog-modal/dialog-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    FormFieldInputComponent,
    ProgressSpinnerComponent,
    TabsComponent,
    DatepickerComponent,
    SnackbarComponent,
    SnackbarMsnComponent,
    DialogComponent,
    DialogModalComponent
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
