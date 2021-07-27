import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { RouterTestingModule } from '@angular/router/testing';
import { DeviceListComponent } from './device-list/device-list.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';


const routes: Routes = [
  { path: '', redirectTo: 'deviceList', pathMatch: 'full'},
  { path: 'update', component: ReactiveFormComponent, pathMatch: 'full'},
  { path: 'deviceList', component: DeviceListComponent, pathMatch: 'full'},
  { path: 'add', component: TemplateFormComponent, pathMatch: 'full'}
  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

