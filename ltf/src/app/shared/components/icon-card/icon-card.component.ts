import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-icon-card',
  templateUrl: './icon-card.component.html',
  styleUrls: ['./icon-card.component.scss']
})
export class IconCardComponent implements OnInit {
  @Input() icon = '';
  @Input() title = '';
  constructor() { }

  ngOnInit(): void {
  }

}
