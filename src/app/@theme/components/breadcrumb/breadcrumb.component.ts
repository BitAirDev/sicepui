import { Component, Input } from '@angular/core';
import { BreadCrumbs } from '../../../interfaces/breadcrumb.interface';
import { NbMenuService } from '@nebular/theme';
import { Router } from "@angular/router";

@Component({
  selector: 'ngx-breadcrumb',
  styleUrls: ['./breadcrumb.component.scss'],
  templateUrl: './breadcrumb.component.html'
})

export class BreadCrumbComponent {
  @Input() data: BreadCrumbs;

  constructor(private menuService: NbMenuService, 
              private router: Router) {
  }
}
