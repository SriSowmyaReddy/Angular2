import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {MyserviceService} from './services/myservice.service';

import { AppComponent } from './app.component';
import {AppRoutingModule, routingComponents} from './app.routing';
import { HomeComponent} from './home/home.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Page4Component } from './page4/page4.component';
import { Page5Component } from './page5/page5.component';

@NgModule({
  declarations: [
    AppComponent, routingComponents, HomeComponent, Page1Component, Page2Component, Page4Component, Page5Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [MyserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }