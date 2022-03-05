import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtividadesComponent } from './pages/dashboard/atividades/atividades.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ResultadosComponent } from './pages/dashboard/resultados/resultados.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: 'dashboard', component: DashboardComponent, children: [
      { path: 'atividades', component: AtividadesComponent },
      { path: 'resultados', component: ResultadosComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
