import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-progress-bar-box',
  templateUrl: './progress-bar-box.component.html',
  styleUrls: ['./progress-bar-box.component.scss']
})
export class ProgressBarBoxComponent implements OnInit {


  @Input() certificateImage: string = '';
  @Input() certificateName: string = '';
  @Input() pointsLabel: string = '';
  @Input() currentPoints: string = '0';
  @Input() maxLevelPoints: string = '0';

  barLength = 0;

  constructor() { }

  ngOnInit(): void {

  }

  setBarLength() {
    this.barLength = (parseInt(this.currentPoints) * 100) / parseInt(this.maxLevelPoints);
  }

  ngOnChanges(changes: any) {
    if (changes.currentPoints || changes.maxLevelPoints)
      this.setBarLength();
  }

}
