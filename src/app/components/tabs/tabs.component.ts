import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent implements OnInit {
  tabs: Tab[];

  constructor() {
    this.tabs = [
      { title: 'Atividades', routerLink: 'atividades' },
      { title: 'Resultados', routerLink: 'resultados' },
      {
        title: 'Plano de desenvolvimento',
        routerLink: 'plano-de-desenvolvimento',
      },
    ];
  }

  ngOnInit(): void {}
}

//
// Utils
//

interface Tab {
  title: string;
  routerLink: string;
}
