import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-rectangle-rounded-card',
  templateUrl: './rectangle-rounded-card.component.html',
  styleUrls: ['./rectangle-rounded-card.component.scss']
})
export class RectangleRoundedCardComponent implements OnInit {

  @Input() cardBg: string = '';
  @Input() cardTextColor: string = '';
  @Input() cardNumberBg: string = '';
  @Input() cardNumber: string = '';
  @Input() cardName: string = '';
  @Input() cardText: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
