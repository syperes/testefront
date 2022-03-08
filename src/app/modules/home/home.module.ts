import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { ActivitiesComponent } from './tabs/activities/activities.component';
import { HomeComponent } from './home.component';
import {PersonAbbrComponent} from "../../components/person-abbr/person-abbr.component";
import {ComponentsModule} from "../../components/components.module";
import {NgApexchartsModule} from "ng-apexcharts";
import { ResultsComponent } from './tabs/results/results.component';
import {SwiperModule} from "swiper/angular";


@NgModule({
  declarations: [
    ActivitiesComponent,
    HomeComponent,
    ResultsComponent,
    // PersonAbbrComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ComponentsModule,
    NgApexchartsModule,
    SwiperModule
  ],
  exports: [
    // PersonAbbrComponent
  ]
})
export class HomeModule { }
