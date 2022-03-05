import { AfterViewInit, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-result-card',
  templateUrl: './result-card.component.html',
  styleUrls: ['./result-card.component.scss']
})
export class ResultCardComponent implements OnInit {
  @Input() name = '';
  @Input() score = 0;
  @Input() scoreTotal = 0;
  @Input() progress = 0;
  constructor() { }

  ngOnInit(): void {
  }
}
