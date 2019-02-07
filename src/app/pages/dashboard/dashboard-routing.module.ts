import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';

const routes: Routes = [{
  path: '',
  component: DashboardComponent,
  children: [{
    path: '',
    component: MainDashboardComponent,
  }], 
}];
 
@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})

export class DashboardRoutingModule {}

export const routedComponents = [
  DashboardComponent,
  MainDashboardComponent,
];
 