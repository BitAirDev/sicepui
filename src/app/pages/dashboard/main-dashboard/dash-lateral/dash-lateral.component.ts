import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngx-dash-lateral',
  styleUrls: ['./dash-lateral.component.scss'],
  templateUrl: './dash-lateral.component.html',
})

export class DashLateralComponent {
  constructor() {}

  ngOnInit() {
  }

   //Aqui se destruyen los objetos que no necesitamos
   ngOnDestroy() {}
}