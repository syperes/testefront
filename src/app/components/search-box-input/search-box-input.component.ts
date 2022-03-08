import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-search-box-input',
  templateUrl: './search-box-input.component.html',
  styleUrls: ['./search-box-input.component.scss']
})
export class SearchBoxInputComponent implements OnInit {

  @Input() public placeholderText: string = 'Buscar';

  constructor() { }

  ngOnInit(): void {
  }

}
