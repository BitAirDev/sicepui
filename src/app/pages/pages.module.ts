import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { PagesRoutingModule } from './pages-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';

import { ModalErrorComponent } from '../@theme/components/error-modal/error-modal.component';
import { ModalWarningComponent } from '../@theme/components/warning-modal/waring-modal.component';

const PAGES_COMPONENTS = [
  PagesComponent,
  ModalErrorComponent,
  ModalWarningComponent,
];

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    DashboardModule,
    MiscellaneousModule
  ], 
  declarations: [
    ...PAGES_COMPONENTS,
  ],
  entryComponents: [
    ModalErrorComponent,
    ModalWarningComponent,
  ],
  providers: [
  ]
})
export class PagesModule {
}
