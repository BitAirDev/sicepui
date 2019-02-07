import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';
import { ToasterModule } from 'angular2-toaster';
import { DashboardRoutingModule, routedComponents } from './dashboard-routing.module';

import { DashBodyComponent } from './main-dashboard/dash-body/dash-body.component';
import { DashLateralComponent } from './main-dashboard/dash-lateral/dash-lateral.component';

import { APIManager } from '../../managers/api.manager';
import { NotificacionesService } from '../../services/notificaciones.service';

import { DashboardService } from '../../services/dashboard.service';

@NgModule({
  imports: [
    ThemeModule,
    DashboardRoutingModule,
    ToasterModule
  ],
  declarations: [
    ...routedComponents,
    DashBodyComponent,
    DashLateralComponent
  ],
  providers: [
    APIManager,
    NotificacionesService,
    DashboardService,
  ]
})
export class DashboardModule { }
