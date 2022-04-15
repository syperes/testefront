import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss'],
})
export class FeaturesComponent implements OnInit {
  progress = 25;
  screenWidth = window.innerWidth;
  peoplesInTrail: PeopleInTrail[];

  constructor() {
    this.peoplesInTrail = [];
  }

  ngOnInit(): void {
    this.peoplesInTrail = [
      { name: 'Bruno', secondNane: 'Silva', color: this.getRandomColor() },
      { name: 'Kalima', secondNane: 'Marcia', color: this.getRandomColor() },
      { name: 'Mikadir', secondNane: 'Noel', color: this.getRandomColor() },
      { name: 'Bruno', secondNane: 'Silva', color: this.getRandomColor() },
      { name: 'Kalima', secondNane: 'Marcia', color: this.getRandomColor() },
      { name: 'Mikadir', secondNane: 'Noel', color: this.getRandomColor() },
      { name: 'Bruno', secondNane: 'Silva', color: this.getRandomColor() },
      { name: 'Kalima', secondNane: 'Marcia', color: this.getRandomColor() },
      { name: 'Mikadir', secondNane: 'Noel', color: this.getRandomColor() },
    ];
  }

  getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';

    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
  }

  getLastsTrail() {
    const lastTrail = this.peoplesInTrail.slice(0, 3);

    return lastTrail;
  }

  trackByFn(index: number, item: PeopleInTrail) {
    return index;
  }

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

interface PeopleInTrail {
  name: string;
  secondNane: string;
  color: string;
}
