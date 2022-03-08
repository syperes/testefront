import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-activity-card',
  templateUrl: './activity-card.component.html',
  styleUrls: ['./activity-card.component.scss']
})
export class ActivityCardComponent implements OnInit {

  @Input() step: string = '1';
  @Input() title: string = '';
  @Input() tags: string[] = [''];
  @Input() publishedAt: string = '';
  @Input() bgImage: string = '';
  @Input() mobileBgImage: string = '';
  @Input() status: 'available'|'done'|'locked' = 'available';
  @Input() link: string|null = null;

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    if (this.link)
      alert('Link clicked!');
  }

  favorite($event: Event) {
    alert('Favorite heart clicked!');
    $event.preventDefault()
  }

}
