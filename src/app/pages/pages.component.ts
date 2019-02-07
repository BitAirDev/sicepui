import { Component } from '@angular/core';

import { MENU_ITEMS } from './pages-menu';

@Component({
  selector: 'ngx-pages',
  template: `
    <bitair-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </bitair-layout>
  `,
})
export class PagesComponent {

  menu = MENU_ITEMS;
}
