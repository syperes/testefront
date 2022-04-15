import { ResultsComponent } from './pages/home/results/results.component';
import { ActivitiesComponent } from './pages/home/activities/activities.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/atividades', pathMatch: 'full' },
  { path: 'atividades', component: ActivitiesComponent },
  { path: 'resultados', component: ResultsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
