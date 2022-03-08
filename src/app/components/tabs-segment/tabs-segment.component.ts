import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {TabItem} from './tab-item.type';

@Component({
  selector: 'app-tabs-segment',
  templateUrl: './tabs-segment.component.html',
  styleUrls: ['./tabs-segment.component.scss']
})
export class TabsSegmentComponent implements OnInit {

  @Input() items: TabItem[] = [];
  @Input() currentActiveKey: string = '';
  @Output() onChangeTab = new EventEmitter<string>();/*(activeKey: string) => void = (activeKey) => {};*/

  constructor() { }

  ngOnInit(): void {
  }

  changeTab(item: any): void {
    this.currentActiveKey = item.key;
    //this.onChange(item.key);
    this.onChangeTab.emit(this.currentActiveKey);
  }

}
