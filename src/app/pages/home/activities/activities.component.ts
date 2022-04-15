import { Component, OnInit, HostListener } from '@angular/core';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss'],
})
export class ActivitiesComponent implements OnInit {
  pillars: Pillar[] = [];
  skills: Skill[] = [];
  recommended: Recommended[] = [];
  aboutYou: Skill = {
    icon: '1',
    tag: 'Identificar',
    title: 'Minha comunicação é clara?',
    time: '2 minutos',
    isFavorite: false,
    withDetails: false,
  };
  screenWidth = window.innerWidth;

  swiperSlidePagination = {
    dynamicBullets: true,
    clickable: true,
  };

  get width() {
    return window.innerWidth;
  }

  constructor() {
    this.pillars = [
      {
        icon: 'assets/images/bright.svg',
        title: 'Clareza',
        active: true,
      },
      {
        icon: 'assets/images/aim.svg',
        title: 'Objetividade',
        active: false,
      },
      {
        icon: 'assets/images/heart.svg',
        title: 'Compreensão',
        active: false,
      },
    ];

    this.skills = [
      {
        icon: 'assets/images/locked.svg',
        title: 'Comunicação consciente',
        tag: 'Aprender',
        time: '4 minutos',
        isFavorite: false,
        withDetails: true,
      },
      {
        icon: 'assets/images/locked.svg',
        title: '10 práticas para uma boa comunicação',
        tag: 'Praticar',
        time: '10 minutos',
        isFavorite: false,
        withDetails: false,
      },
      {
        icon: 'assets/images/locked.svg',
        title: '4 regras da boa comunicação',
        tag: 'Mapear',
        time: '2 minutos',
        isFavorite: false,
        withDetails: false,
      },
    ];

    this.recommended = [
      {
        image: 'assets/images/card-image.png',
        icon: 'assets/images/book.svg',
        title: 'What Your Most Vivid Memories Say About You',
        subtitle:
          'Even when we believe that we’ve created a happy, ideal life for…',
      },
      {
        image: 'assets/images/card-image.png',
        icon: 'assets/images/book.svg',
        title: 'What Your Most Vivid Memories Say About You',
        subtitle:
          'Even when we believe that we’ve created a happy, ideal life for…',
      },
      {
        image: 'assets/images/card-image.png',
        icon: 'assets/images/book.svg',
        title: 'What Your Most Vivid Memories Say About You',
        subtitle:
          'Even when we believe that we’ve created a happy, ideal life for…',
      },
    ];
  }

  ngOnInit(): void {}

  isMobile() {
    return window.innerWidth < 1024;
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.screenWidth = window.innerWidth;
  }
}

//
// Utils
//

export interface Pillar {
  icon: string;
  title: string;
  active: boolean;
}

interface Skill {
  icon: string;
  title: string;
  tag: string;
  time: string;
  isFavorite: boolean;
  withDetails: boolean;
}

interface Recommended {
  image: string;
  icon: string;
  title: string;
  subtitle: string;
}
