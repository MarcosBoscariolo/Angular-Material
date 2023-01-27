import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormFieldInputComponent } from './components/form-field-input/form-field-input.component';

const routes: Routes = [
  { path: 'inputs', component: FormFieldInputComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
