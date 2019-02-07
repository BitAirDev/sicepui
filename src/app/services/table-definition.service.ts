import { Injectable } from '@angular/core';

@Injectable()
export class TableDefinitionService {

  private vehicleConfiguration = {
    mode: 'external',
    actions: { columnTitle: 'Acciones', add: false, },
    pager: { perPage: '16' }, noDataMessage: 'No existe información',
    edit:    { editButtonContent: '<i class="nb-edit"></i>'},
    delete:  { deleteButtonContent: '<i class="nb-trash"></i>'},
    columns: { id: { title: 'ID', type: 'number', width: '100px' },
               code: { title: 'Código', type: 'string', width: '100px' },
	             name: { title: 'Nombre', type: 'string'},
             }
  };

  constructor() {}

  public getVehicleConfigurationTbl()  {
    return this.vehicleConfiguration;
  }
}