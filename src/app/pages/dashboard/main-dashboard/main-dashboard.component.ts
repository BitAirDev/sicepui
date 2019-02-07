import { Component, HostListener } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { DashboardService } from '../../../services/dashboard.service';

import { NotificacionesService } from '../../../services/notificaciones.service';

@Component({
  selector: 'ngx-main-dashboard',
  styleUrls: ['./main-dashboard.component.scss'],
  templateUrl: './main-dashboard.component.html',
})

export class MainDashboardComponent {
  elementsContainerHeight;

  private messages_error: string[] = [];

  private messages_success: string[] = [];

  constructor(private service: DashboardService,
    private notification: NotificacionesService,
    private modalService: NgbModal) {
  }

  //Iniciando la página
  ngOnInit() {
    this.getData();
    this.setHeight();
  }

  //Aqui se destruyen los objetos que no necesitamos
  ngOnDestroy() {}

  // Funciones con Promesas hacia servicios API
  private getData() {
  }

  // Acciones de la  Forma
  @HostListener('window:resize', ['$event']) onResize(event) {
    this.setHeight();
  }

  private setHeight() {
    this.elementsContainerHeight = window.innerHeight - 82;
  }
}
