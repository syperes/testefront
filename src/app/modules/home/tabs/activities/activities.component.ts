import {Component, OnInit, ViewEncapsulation} from '@angular/core';

// import Swiper core and required modules
// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import {ApiRequestsService} from "../../../../services/api-requests.service";

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

@Component({
  selector: 'home-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ActivitiesComponent implements OnInit {

  public swiperSlideBreakpoints = {
      '320': {
        spaceBetween: 20
      },
      '768': {
        slidesPerView: 3,
      }
  }

  public swiperSlidePagination = {
    dynamicBullets: true,
    clickable: true
  }

  public meetYourselfCards: any[] = [];
  public improveYourselfCards: any[] = [];
  public recomendedContentSlides: any[] = [];

  constructor(private api: ApiRequestsService) {
    this.api.getDataFromApi().subscribe((data: any) => {
      this.meetYourselfCards = data.activities.meetYourSelf;
      this.improveYourselfCards = data.activities.improveYourself;
      this.recomendedContentSlides = data.activities.recomendedContents;
    });

  }

  ngOnInit(): void {
  }

}
