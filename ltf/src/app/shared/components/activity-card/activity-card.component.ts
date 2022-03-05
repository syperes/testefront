import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-activity-card',
  templateUrl: './activity-card.component.html',
  styleUrls: ['./activity-card.component.scss']
})
export class ActivityCardComponent implements OnInit {
  @Input() id!: number;
  @Input() tag!: string;
  @Input() title!: string;
  @Input() status!: string;
  @Input() time!: number;
  @Input() image!: string;
  constructor() { }

  ngOnInit(): void {
  }

}
