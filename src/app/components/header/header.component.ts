import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  header: Header;

  constructor() {
    this.header = {
      user: {
        name: 'Flavia',
      },
    };
  }

  ngOnInit(): void {}
}

interface Header {
  user: User;
}

interface User {
  name: string;
}
