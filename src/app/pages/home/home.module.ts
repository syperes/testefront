import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivitiesComponent } from './activities/activities.component';
import { ResultsComponent } from './results/results.component';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  declarations: [ActivitiesComponent, ResultsComponent],
  exports: [],
  imports: [CommonModule, SwiperModule],
})
export class HomeModule {}
