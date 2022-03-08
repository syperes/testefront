import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-vertical-card',
  templateUrl: './vertical-card.component.html',
  styleUrls: ['./vertical-card.component.scss']
})
export class VerticalCardComponent implements OnInit {

  @Input() bgImage: string = '';
  @Input() iconPath: string = '';
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() link: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  onClickReadMore() {
    alert('Read more clicked');
  }

  onClickSave() {
    alert('Save clicked');
  }

}
