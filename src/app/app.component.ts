import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'testefront2';

  menuItems = [
    {icon: 'home', isActive: true, path: ''},
    {icon: 'explore', path: ''},
    {icon: 'calendar', path: ''},
    {icon: 'trail', path: ''},
    {icon: 'robot', path: ''},
    {icon: 'mentor', path: ''},
    {icon: 'profile', path: ''},
    {icon: 'questions', path: '', onBottom: true},
    {icon: 'logout', path: '', onBottom: true},
  ];

  getMenuItems(onlyBottoms = false) {
    return this.menuItems.filter((i) => {
      return (onlyBottoms && i.onBottom || (!onlyBottoms && !i.onBottom));
    })
  }

  getIconPath(iconName: string) {
    return `url('/assets/images/menu-items/${iconName}.svg')`;
  }
}
