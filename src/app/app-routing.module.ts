import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormFieldInputComponent } from './components/form-field-input/form-field-input.component';
import { ProgressSpinnerComponent } from './components/progress-spinner/progress-spinner.component';
import { TabsComponent } from './components/tabs/tabs.component';

const routes: Routes = [
  { path: 'inputs', component: FormFieldInputComponent },
  { path: 'progress', component: ProgressSpinnerComponent },
  { path: 'tabs', component: TabsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
