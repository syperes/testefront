import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ComponentsModule} from "./components/components.module";
import {NgApexchartsModule} from "ng-apexcharts";
import { SwiperModule } from 'swiper/angular';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [
        AppComponent,
        // SearchBoxInputComponent,
        // PersonAbbrComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ComponentsModule,
        NgApexchartsModule,
        SwiperModule,
        HttpClientModule,
    ],
    providers: [],
  exports: [
    // PersonAbbrComponent,
    // SearchBoxInputComponent
  ],
    bootstrap: [AppComponent]
})
export class AppModule { }
