import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  header: Menu;

  constructor() {
    this.header = {
      menuIcons: [
        {
          icon: 'assets/images/home.svg',
        },
        {
          icon: 'assets/images/explore.svg',
        },
        {
          icon: 'assets/images/calendar.svg',
        },
        {
          icon: 'assets/images/trail.svg',
        },
        {
          icon: 'assets/images/self-bag.svg',
        },
        {
          icon: 'assets/images/mentor.svg',
        },
        {
          icon: 'assets/images/profile.svg',
        },
        {
          icon: 'assets/images/questions.svg',
        },
        {
          icon: 'assets/images/logout.svg',
        },
      ],
    };
  }

  ngOnInit(): void {}
}

interface Menu {
  menuIcons: MenuIcons[];
}

interface MenuIcons {
  icon: string;
}
