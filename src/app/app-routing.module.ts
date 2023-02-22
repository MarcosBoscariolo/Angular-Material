import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatatableComponent } from './components/datatable/datatable.component';
import { DatepickerComponent } from './components/datepicker/datepicker.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { FormFieldInputComponent } from './components/form-field-input/form-field-input.component';
import { ProgressSpinnerComponent } from './components/progress-spinner/progress-spinner.component';
import { SnackbarComponent } from './components/snackbar/snackbar.component';
import { TabsComponent } from './components/tabs/tabs.component';

const routes: Routes = [
  { path: 'inputs', component: FormFieldInputComponent },
  { path: 'progress', component: ProgressSpinnerComponent },
  { path: 'tabs', component: TabsComponent },
  { path: 'datepicker', component: DatepickerComponent },
  { path: 'snackbar', component: SnackbarComponent },
  { path: 'dialog', component: DialogComponent },
  { path: 'datatable', component: DatatableComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
