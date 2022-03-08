import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SearchBoxInputComponent} from "./search-box-input/search-box-input.component";
import {PersonAbbrComponent} from "./person-abbr/person-abbr.component";
import { TabsSegmentComponent } from './tabs-segment/tabs-segment.component';
import { ButtonIconVerticalComponent } from './button-icon-vertical/button-icon-vertical.component';
import { ActivityCardComponent } from './activity-card/activity-card.component';
import { VerticalCardComponent } from './vertical-card/vertical-card.component';
import { ProgressBarBoxComponent } from './progress-bar-box/progress-bar-box.component';
import { RectangleRoundedCardComponent } from './rectangle-rounded-card/rectangle-rounded-card.component';
import { ButtonComponent } from './button/button.component';



@NgModule({
  declarations: [
    SearchBoxInputComponent,
    PersonAbbrComponent,
    TabsSegmentComponent,
    ButtonIconVerticalComponent,
    ActivityCardComponent,
    VerticalCardComponent,
    ProgressBarBoxComponent,
    RectangleRoundedCardComponent,
    ButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PersonAbbrComponent,
    SearchBoxInputComponent,
    TabsSegmentComponent,
    ButtonIconVerticalComponent,
    ActivityCardComponent,
    VerticalCardComponent,
    ProgressBarBoxComponent,
    RectangleRoundedCardComponent,
    ButtonComponent
  ]
})
export class ComponentsModule { }
