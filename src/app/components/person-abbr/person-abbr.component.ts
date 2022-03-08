import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-person-abbr',
  templateUrl: './person-abbr.component.html',
  styleUrls: ['./person-abbr.component.scss']
})
export class PersonAbbrComponent implements OnInit {

  @Input() public abbr: string = '';
  @Input() public color: string = '#CCC';

  constructor() { }

  ngOnInit(): void {
  }

}
