import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {

  tabs : string[] = ['atividades', 'resultados'];
  activeLink: string = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
    const url = this.router.url.split('/');
    this.activeLink = url[url.length - 1];
  }

}
