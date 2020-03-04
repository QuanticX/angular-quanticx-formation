import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { PipeComponent } from './pipe/pipe.component';

const appRoutes: Routes = [
  { path: 'interpolation', component: InterpolationComponent },
  { path: 'pipe', component: PipeComponent },
];


@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot( appRoutes )
 ],
  declarations: [ AppComponent, HelloComponent, InterpolationComponent, PipeComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
