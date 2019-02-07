import { Component, HostListener } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { NotificacionesService } from '../../../../services/notificaciones.service';

@Component({
  selector: 'ngx-dash-body',
  styleUrls: ['./dash-body.component.scss'],
  templateUrl: './dash-body.component.html',
})

export class DashBodyComponent {
  elementsContainerHeight;
  selectedDataIndex = 0;
  estacionCompareFields = [];
  config: any;
  stationDataTitle: any;
  innerEstacion: any;

  private messages_error: string[] = [];

  private messages_success: string[] = [];

  constructor(private notification: NotificacionesService,
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
    this.elementsContainerHeight = window.innerHeight - 229;
  }
}
