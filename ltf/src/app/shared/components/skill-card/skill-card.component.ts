import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill-card',
  templateUrl: './skill-card.component.html',
  styleUrls: ['./skill-card.component.scss']
})
export class SkillCardComponent implements OnInit {
  @Input() level = 0;
  @Input() title = '';
  @Input() description = '';
  @Input() success = false;
  constructor() { }

  ngOnInit(): void {
  }

}
