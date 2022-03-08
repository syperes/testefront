import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-button-icon-vertical',
  templateUrl: './button-icon-vertical.component.html',
  styleUrls: ['./button-icon-vertical.component.scss']
})
export class ButtonIconVerticalComponent implements OnInit {

  @Input() icon: string = '';
  @Input() label: string = '';
  @Input() border: boolean = false;
  @Input() active: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
