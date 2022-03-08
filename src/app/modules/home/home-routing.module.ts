import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ActivitiesComponent} from "./tabs/activities/activities.component";
import {HomeComponent} from "./home.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  /*{
    path: 'activities',
    component: ActivitiesComponent,
  }*/
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
