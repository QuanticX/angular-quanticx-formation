import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import { AppComponent } from './app.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { PipeComponent } from './pipe/pipe.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { IfComponent } from './if/if.component';
import { ForComponent } from './for/for.component';
import { LogService } from './log.service';
import { APIComponent } from './api/api.component';
import { HttpService } from './http.service';
import { FormControlComponent } from './form-control/form-control.component';
import { FormGroupComponent } from './form-group/form-group.component';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { ValidatorsComponent } from './validators/validators.component';

const appRoutes: Routes = [
  { path: 'interpolation', component: InterpolationComponent },
  { path: 'pipe', component: PipeComponent },
  { path: 'property-binding', component: PropertyBindingComponent },
  { path: 'event-binding', component: EventBindingComponent },
  { path: 'two-way-binding', component: TwoWayBindingComponent },
  { path: 'input-output', component: ParentComponent },
  { path: 'if', component: IfComponent },
  { path: 'for', component: ForComponent },
  { path: 'api', component: APIComponent },
  { path: 'form-control', component: FormControlComponent },
  { path: 'form-group', component: FormGroupComponent },
  { path: 'form-builder', component: FormBuilderComponent },
  { path: 'validators', component: ValidatorsComponent },
];


@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot( appRoutes ), HttpClientModule, ReactiveFormsModule
 ],
  declarations: [ AppComponent, InterpolationComponent, PipeComponent, PropertyBindingComponent, EventBindingComponent, TwoWayBindingComponent, ParentComponent, ChildComponent, IfComponent, ForComponent, APIComponent, FormControlComponent, FormGroupComponent, FormBuilderComponent, ValidatorsComponent ],
  bootstrap:    [ AppComponent ],
  providers: [LogService, {provide: HTTP_INTERCEPTORS, useClass: LogService, multi: true}, HttpService]
})
export class AppModule { }
