import { FeaturesComponent } from './features/features.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoundProgressModule } from 'angular-svg-round-progressbar';
import { HeaderComponent } from './../components/header/header.component';
import { TabsComponent } from './tabs/tabs.component';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HeaderComponent,
    FeaturesComponent,
    TabsComponent,
    MenuComponent,
  ],
  exports: [HeaderComponent, FeaturesComponent, TabsComponent, MenuComponent],
  imports: [CommonModule, RoundProgressModule, RouterModule],
})
export class ComponentsModule {}
