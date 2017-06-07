import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from '../app.component';
import {AppRoutingModule, routingComponents} from '../app.routing';
import { Page4Component } from '../page4/page4.component';
import { Page5Component } from '../page5/page5.component'
@NgModule({
  declarations: [
    AppComponent, routingComponents, Page4Component, Page5Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class Page1Module { }