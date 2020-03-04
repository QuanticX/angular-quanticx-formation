import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { PipeComponent } from './pipe/pipe.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { IfComponent } from './if/if.component';

const appRoutes: Routes = [
  { path: 'interpolation', component: InterpolationComponent },
  { path: 'pipe', component: PipeComponent },
  { path: 'property-binding', component: PropertyBindingComponent },
  { path: 'event-binding', component: EventBindingComponent },
  { path: 'two-way-binding', component: TwoWayBindingComponent },
  { path: 'input-output', component: ParentComponent },
  { path: 'if', component: IfComponent },
];


@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot( appRoutes )
 ],
  declarations: [ AppComponent, InterpolationComponent, PipeComponent, PropertyBindingComponent, EventBindingComponent, TwoWayBindingComponent, ParentComponent, ChildComponent, IfComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
